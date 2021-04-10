require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const checkToken = require('../utils/check-token');


// @route   Get api/connections
// @desc    get all artists in network from connections
// @access  Public
router.get('/', async (req, res) => {
  try {
    const artistNetworkData = await db.query(
    `SELECT profiles.first_name, profiles.user_id
    FROM artist_network
    LEFT JOIN users ON (users.id = artist_network.requester_id)
    LEFT JOIN profiles ON (artist_network.requester_id = profiles.user_id) WHERE artist_network.target_id = $1
    UNION
    SELECT profiles.first_name, users.id
    FROM artist_network
    LEFT JOIN users ON (users.id = artist_network.target_id)
    LEFT JOIN profiles ON (artist_network.target_id = profiles.user_id) WHERE artist_network.requester_id = $1`,
    [req.user.id]
  );
  
  if (!artistNetworkData.rows[0]) {
    return res
      .status(400)
      .json({ message: 'No artists in network yet!' })
  }
  res.status(200).json({
    message: 'Your artist network was successfully retrieved.',
    results: artistNetworkData.rows.length,
    artistNetworkInfo: toCamelCase(artistNetworkData.rows)[0],
  });
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server error')
  }
});

// @route   POST api/connections
// @desc    Log a new connection
// @access  Private
router.post('/', checkToken, async(req, res) => {
  try {
    const newConnectionData = await db.query(
      `INSERT INTO artist_network (requester_id, target_id, connection_status, created_at) 
            VALUES ($1, $2. $3, $4) RETURNING *`,
      [
        req.user.id,
        req.body.targetId,
        req.body.connectionStatus,
        req.body.createdAt
      ]
    );
    res.json({
      message: 'The artist was sent a connection request!',
      newConnectionData = toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/connections
// @desc    Update the connection from pending
// @access  Private
router.put('/', checkToken, async(req, res) => {
  try {
    const newConnectionData = await db.query(
      `UPDATE artist_network 
      SET connection_status=$3 
      WHERE target_id=$1 AND requester_id=$2`,
      [
        req.user.id,
        req.body.requesterId,
        req.body.connectionStatus,
      ]
    );
    res.json({
      message: 'The artist was added into your network!',
      newConnectionData = toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/', checkToken, async(req, res) => {
  try {
    const newConnectionData = await db.query(
      `DELETE FROM artist_network 
      WHERE (target_id=$1 AND requester_id=$2)
      OR (requester_id=$1 AND target_id=$2);`,
      [
        req.user.id,
        req.body.userId,
        req.body.connectionStatus,
      ]
    );
    res.json({
      message: 'The artist was removed from your network!',
      newConnectionData = toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

