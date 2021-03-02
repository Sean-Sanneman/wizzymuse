const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case')
const db = require('../db');

// @route   GET api/artists
// @desc    Get all artists
// @access  Public or Private? (TO DO)
router.get('/', async (req, res) => {
  try {
    const artists = await db.query('SELECT * FROM artists;');
    res.json({
      message: 'The artists were successfully retrieved.',
      artists: toCamelCase(artists.rows),
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   GET api/artists/:id
// @desc    Get one artist
// @access  Private (TO DO)
router.get('/:id', async (req, res) => {
  try {
    const selectedArtist = await db.query(
      'SELECT * FROM artists WHERE id = $1;',
      [req.params.id]
    );
    if (selectedArtist.rows[0]) {
      res.json({
        message: 'The selected artist was successfully retrieved.',
        artist: toCamelCase(selectedArtist.rows)[0],
      });
    } else {
      res.json({
        message: 'The selected artist does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   POST api/artists
// @desc    Create a new artist
// @access  Private (TO DO)
router.post('/', async (req, res) => {
  try {
    const newArtist = await db.query(
      'INSERT INTO artists (first_name, last_name, email, username, password, dob, phone, avatar, city, state, country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, soundcloud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *;',
      [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.dob,
        req.body.phone,
        req.body.avatar,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.bio,
        req.body.band,
        req.body.website,
        req.body.youtube,
        req.body.twitter,
        req.body.facebook,
        req.body.linkedin,
        req.body.instagram,
        req.body.soundcloud,
      ]
    );
    res.json({
      message: 'A new artist was created.',
      artist: toCamelCase(newArtist.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/artists/:id
// @desc    Update an artist
// @access  Private (TO DO)
router.put('/:id', async (req, res) => {
  try {
    const updatedArtist = await db.query(
      'UPDATE artists SET first_name = $1, last_name = $2, email = $3, username = $4, password = $5, dob = $6, phone = $7, avatar = $8, city = $9, state = $10, country = $11, bio = $12, band = $13, website = $14, youtube = $15, twitter = $16, facebook = $17, linkedin = $18, instagram = $19, soundcloud = $20 WHERE id = $21 RETURNING *;',
      [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.dob,
        req.body.phone,
        req.body.avatar,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.bio,
        req.body.band,
        req.body.website,
        req.body.youtube,
        req.body.twitter,
        req.body.facebook,
        req.body.linkedin,
        req.body.instagram,
        req.body.soundcloud,
        req.params.id,
      ]
    );
    if (updatedArtist.rows[0]) {
      res.json({
        message: 'The artist was successfully updated.',
        artist: toCamelCase(updatedArtist.rows)[0],
      });
    } else {
      res.json({
        message: 'The artist does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/artists/:id
// @desc    Delete an artist
// @access  Private (TO DO)
router.delete('/:id', async (req, res) => {
  try {
    const deletedArtist = await db.query(
      'DELETE FROM artists WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedArtists.rows[0]) {
      res.json({
        message: 'The selected artist was successfully deleted.',
        artist: toCamelCase(deletedArtist.rows)[0],
      });
    } else {
      res.json({
        message: 'The artists does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
