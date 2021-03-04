require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const checkArtistInput = require('../utils/check-artist-input');
const checkToken = require('../utils/check-token');
const toCamelCase = require('../utils/to-camel-case');

// @route   GET api/artists/me
// @desc    Get the current user's artist profile, if any, by user ID located in the token
// @access  Private
router.get('/me', checkToken, async (req, res) => {
  try {
    const artistData = await db.query(
      'SELECT * FROM artists WHERE user_id = $1;',
      [req.user.id]
    );

    if (!artistData.rows[0]) {
      return res
        .status(400)
        .json({ message: 'There is no artist profile for this user' });
    }
    res.status(200).json({
      message: 'Your artist profile information was successfully retrieved.',
      results: artistData.rows.length,
      currentArtist: toCamelCase(artistData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/artists
// @desc    Get all artists
// @access  Public
// @TODO    JOIN instruments and genres tables, ORDER BY?
router.get('/', async (req, res) => {
  try {
    const artistsData = await db.query(
      `SELECT users.email, users.username, users.avatar, artists.id, artists.first_name, artists.last_name, 
          artists.dob, artists.phone, artists.city, artists.state, artists.country, artists.bio, artists.band, 
          artists.website, artists.youtube, artists.twitter, artists.facebook, artists.linkedin, artists.instagram, 
          artists.soundcloud, artists.created_at, instruments.instrument_name, instrument_assignments.proficiency, genres.genre_name 
       FROM artists 
       INNER JOIN users ON (users.id = artists.user_id)
       LEFT JOIN instrument_assignments ON (artists.id = instrument_assignments.artist_id)
       LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id)
       LEFT JOIN genre_assignments ON (artists.id = genre_assignments.artist_id)
       LEFT JOIN genres ON (genres.id = genre_assignments.genre_id);; 
       ;`
    );
    res.status(200).json({
      message: 'The artists were successfully retrieved.',
      results: artistsData.rows.length,
      artists: toCamelCase(artistsData.rows),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/artists/:id
// @desc    Get one artist by artist ID
// @access  Public
// @TODO    JOIN instruments and genres tables
router.get('/:id', async (req, res) => {
  try {
    const selectedArtistData = await db.query(
      'SELECT users.email, users.username, users.avatar, artists.id, artists.first_name, artists.last_name, artists.dob, artists.phone, artists.city, artists.state, artists.country, artists.bio, artists.band, artists.website, artists.youtube, artists.twitter, artists.facebook, artists.linkedin, artists.instagram, artists.soundcloud, artists.created_at FROM artists LEFT JOIN users ON (users.id = artists.user_id) WHERE artists.id = $1;',
      [req.params.id]
    );
    if (!selectedArtistData.rows[0]) {
      return res.status(400).json({
        message: 'The selected artist does not exist.',
        results: selectedArtistData.rows.length,
      });
    }
    res.status(200).json({
      message: 'The selected artist was successfully retrieved.',
      results: selectedArtistData.rows.length,
      artist: toCamelCase(selectedArtistData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/artists
// @desc    Create the user's artist profile
// @access  Private (only the logged in user can create his/her own artist profile)
// @TODO    Develop validations in checkArtistInput
router.post('/', checkToken, checkArtistInput, async (req, res) => {
  try {
    // check if the artist profile already exists
    const artistData = await db.query(
      'SELECT * FROM artists WHERE user_id = $1;',
      [req.user.id]
    );

    if (artistData.rows[0]) {
      return res.status(400).json({
        message: 'An artist profile already exists for this user',
        results: artistData.rows.length,
      });
    }

    // save the artist profile to the database
    const newArtistData = await db.query(
      'INSERT INTO artists (user_id, first_name, last_name, dob, phone, city, state, country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, soundcloud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *;',
      [
        req.user.id,
        req.body.firstName,
        req.body.lastName,
        req.body.dob,
        req.body.phone,
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
    res.status(200).json({
      message: 'A new artist profile was created.',
      results: newArtistData.rows.length,
      artist: toCamelCase(newArtistData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/artists
// @desc    Update an artist's profile
// @access  Private (only the logged in user can update his/her own artist profile)
router.put('/', checkToken, checkArtistInput, async (req, res) => {
  try {
    const updatedArtistData = await db.query(
      'UPDATE artists SET first_name = $1, last_name = $2, dob = $3, phone = $4, city = $5, state = $6, country = $7, bio = $8, band = $9, website = $10, youtube = $11, twitter = $12, facebook = $13, linkedin = $14, instagram = $15, soundcloud = $16 WHERE user_id = $17 RETURNING *;',
      [
        req.body.firstName,
        req.body.lastName,
        req.body.dob,
        req.body.phone,
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
        req.user.id,
      ]
    );
    if (!updatedArtistData.rows[0]) {
      return res.status(400).json({
        message: 'The artist does not exist.',
        results: updatedArtistData.rows.length,
      });
    }
    res.status(200).json({
      message: 'The artist was successfully updated.',
      results: updatedArtistData.rows.length,
      artist: toCamelCase(updatedArtistData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/artists
// @desc    Delete the artist profile
// @access  Private (only the logged in user can delete his/her own profile)
router.delete('/', checkToken, async (req, res) => {
  try {
    const deletedArtistData = await db.query(
      'DELETE FROM artists WHERE user_id = $1 RETURNING *;',
      [req.user.id]
    );
    if (!deletedArtistData.rows[0]) {
      return res.status(400).json({
        message: 'The artist profile does not exist.',
        results: deletedArtistData.rows.length,
      });
    }
    res.status(200).json({
      message: 'Your artist profile was successfully deleted.',
      results: deletedArtistData.rows.length,
      deletedArtist: toCamelCase(deletedArtistData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
