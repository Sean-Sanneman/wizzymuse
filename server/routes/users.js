require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkUserInput = require('../utils/check-user-input');

// @route   POST api/users/register
// @desc    Register a new user and return the token
// @access  Public
router.post('/register', checkUserInput, async (req, res) => {
  const { email, username, password } = req.body;
  try {
    // check if user is already registered
    const userData = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (userData.rows[0]) {
      return res.status(400).json({
        message: 'You are already registered.',
      });
    }

    // encrypt the password provided
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // grab the avatar
    const avatar = gravatar.url(email, {
      s: '200', // size of the avatar
      r: 'pg', // rating
      d: 'mm', // default icon
    });

    // save the new user to the database
    const newUserData = await db.query(
      'INSERT INTO users (email, username, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, username, bcryptPassword, avatar]
    );

    // return the token
    const payload = {
      user: {
        id: newUserData.rows[0].id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: process.env.JWTEXPIRATION },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          message: 'You have been successfully registered.',
          token,
        }); // send token back to client
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/users
// @desc    Get all users
// @access  Private for admin purposes?
// @TODO

// @route   GET api/users/:id
// @desc    Get one user
// @access  Private for admin purposes?
// @TODO

// @route   PUT api/users/:id
// @desc    Update user info
// @access  Private
// @TODO

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Private
// @TODO

module.exports = router;
