require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkUserInput = require('../utils/check-user-input');
const checkToken = require('../utils/check-token');
const toCamelCase = require('../utils/to-camel-case');

// @route   POST api/auth/login
// @desc    Login a user and return the token
// @access  Public
// @status  checked, in use
router.post('/login', checkUserInput, async (req, res) => {
  const { email, password } = req.body;

  try {
    // retrieve the user's data, if any
    const userData = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (!userData.rows[0]) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    // verify if password provided matches
    const validPassword = await bcrypt.compare(
      password,
      userData.rows[0].password
    );
    if (!validPassword) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    // return the token
    const payload = {
      user: {
        id: userData.rows[0].id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: process.env.JWTEXPIRATION },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token); // send token back to client
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route - GET api/auth
// @desc - Load user with valid token
// @access - Private
// @status  checked, in use
router.get('/', checkToken, async (req, res) => {
  try {
    // retrieve the user's information
    const userData = await db.query(
      'SELECT email, username, avatar, created_at FROM users WHERE id = $1',
      [req.user.id]
    );

    if (!userData.rows[0]) {
      return res.status(400).json({ message: 'This user was not found' });
    }

    // build the userMeObj to return
    const userMeObj = toCamelCase(userData.rows)[0];

    // retrieve the user's connections
    const connectionsMeData = await db.query(
      'SELECT target_id AS connection_id FROM artist_network WHERE requester_id = $1 UNION SELECT requester_id AS connection_id FROM artist_network WHERE target_id = $1;',
      [req.user.id]
    );
    connectionsMeData.rows
      ? (userMeObj.connections = connectionsMeData.rows)
      : (userMeObj.connections = []);
    console.log('userMeObj', userMeObj);
    res.status(200).json(userMeObj);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
