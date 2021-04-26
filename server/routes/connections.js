require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const checkToken = require('../utils/check-token');
const toCamelCase = require('../utils/to-camel-case');

// @route   Get api/connections
// @desc    get all artists in network from connections
// @access  Public
router.get('/', async (req, res) => {
  try {
    const connectionsData = await db.query(
      `SELECT profiles.first_name, profiles.user_id
    FROM connections
    LEFT JOIN users ON (users.id = connections.requester_id)
    LEFT JOIN profiles ON (connections.requester_id = profiles.user_id) WHERE connections.target_id = $1
    UNION
    SELECT profiles.first_name, users.id
    FROM connections
    LEFT JOIN users ON (users.id = connections.target_id)
    LEFT JOIN profiles ON (connections.target_id = profiles.user_id) WHERE connections.requester_id = $1`,
      [req.user.id]
    );

    if (!connectionsData.rows[0]) {
      return res.status(400).json({ message: 'No artists in network yet!' });
    }
    res.status(200).json({
      message: 'Your artist network was successfully retrieved.',
      results: connectionsData.rows.length,
      connectionsInfo: toCamelCase(connectionsData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/connections
// @desc    Create a new connection
// @access  Private
// @status  checked in use
router.post('/', checkToken, async (req, res) => {
  try {
    const newConnectionData = await db.query(
      `INSERT INTO connections (requester_id, target_id, connection_status, created_at) 
            VALUES ($1, $2, $3, $4) RETURNING *;`,
      [
        req.user.id,
        req.body.targetId,
        req.body.connectionStatus,
        req.body.createdAt,
      ]
    );
    res.json(toCamelCase(newConnectionData.rows)[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/connections
// @desc    Update the connection from pending
// @access  Private
router.put('/', checkToken, async (req, res) => {
  try {
    const newConnectionData = await db.query(
      `UPDATE connections 
      SET connection_status=$3 
      WHERE target_id=$1 AND requester_id=$2`,
      [req.user.id, req.body.requesterId, req.body.connectionStatus]
    );
    res.json({
      message: 'The artist was added into your network!',
      newConnectionData: toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/connections
// @desc    Delete a connection
// @access  Private
router.delete('/', checkToken, async (req, res) => {
  try {
    const newConnectionData = await db.query(
      `DELETE FROM connections 
      WHERE (target_id=$1 AND requester_id=$2)
      OR (requester_id=$1 AND target_id=$2);`,
      [req.user.id, req.body.userId, req.body.connectionStatus]
    );
    res.json({
      message: 'The artist was removed from your network!',
      newConnectionData: toCamelCase(newConnectionData.rows)[0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
