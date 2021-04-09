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
    `SELECT profiles.first_name
    FROM artist_network
    LEFT JOIN users ON (users.id = connections.requester_id)
    LEFT JOIN profiles ON (connections.target_id = profiles.user_id) WHERE connections.requester_id = $1
    UNION
    SELECT profiles.first_name
    FROM artist_network
    LEFT JOIN users ON (users.id = connections.target_id)
    LEFT JOIN profiles ON (connections.requester_id = profiles.user_id) WHERE connections.target_id = $1`,
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
      'INSERT INTO artist_network (requester_id, target_id, connection_status, created_at) VALUES ($1, $2. $3, $4) RETURNING *',
      [
        req.user.id,
        req.body.targetId,
        req.body.connectionStatus,
        req.body.createdAt
      ]
    );
    res.json({
      message: 'A new artist was added to your network.',
      newConnectionData = toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});