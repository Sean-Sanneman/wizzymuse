require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const router = express.Router();
const db = require('../db');
const checkProfileInput = require('../utils/check-profile-input');
const checkToken = require('../utils/check-token');
const toCamelCase = require('../utils/to-camel-case');

// @route   GET api/profiles/me
// @desc    Get the current user's profile, if any, by user ID located in the token
// @access  Private
router.get('/me', checkToken, async (req, res) => {
  try {
    const profileData = await db.query(
      'SELECT * FROM profiles WHERE user_id = $1;',
      [req.user.id]
    );

    if (!profileData.rows[0]) {
      return res
        .status(400)
        .json({ message: 'There is no profile profile for this user' });
    }
    res.status(200).json({
      message: 'Your profile profile information was successfully retrieved.',
      results: profileData.rows.length,
      currentprofile: toCamelCase(profileData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profiles
// @desc    Get all profiles
// @access  Public
// @TODO    JOIN instruments and genres tables, ORDER BY?
router.get('/', async (req, res) => {
  try {
    const profilesData = await db.query(
      `SELECT users.email, users.username, users.avatar, 
        profiles.id, profiles.first_name, profiles.last_name, 
        profiles.dob, profiles.phone, profiles.city, profiles.state, 
        profiles.country, profiles.bio, profiles.band, profiles.website, 
        profiles.youtube, profiles.twitter, profiles.facebook, profiles.linkedin, 
        profiles.instagram, profiles.soundcloud, 
        profiles.created_at FROM profiles INNER JOIN users ON (users.id = profiles.user_id);`
    );
    res.status(200).json({
      message: 'The profiles were successfully retrieved.',
      results: profilesData.rows.length,
      profiles: toCamelCase(profilesData.rows),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profiles/:id
// @desc    Get one profile by profile ID
// @access  Public
// @TODO    JOIN instruments and genres tables
router.get('/:id', async (req, res) => {
  try {
    const selectedprofileData = await db.query(
      `SELECT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
      profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
      profiles.bio, profiles.band, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
      profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.created_at, 
      instruments.instrument_name, genres.genre_name, instrument_assignments.proficiency 
      FROM profiles LEFT JOIN users ON (users.id = profiles.user_id)
      LEFT JOIN instrument_assignments ON (profiles.id = instrument_assignments.profile_id)
      LEFT JOIN genre_assignments ON (profiles.id = genre_assignments.profile_id)
      LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id)
      LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) WHERE profiles.id = $1;`,
      [req.params.id]
    );

    if (!selectedprofileData.rows[0]) {
      return res.status(400).json({
        message: 'The selected profile does not exist.',
        results: selectedprofileData.rows.length,
      });
    }
    res.status(200).json({
      message: 'The selected profile was successfully retrieved.',
      results: selectedprofileData.rows.length,
      profile: toCamelCase(selectedprofileData.rows),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/profiles
// @desc    Create the user's profile
// @access  Private (only the logged in user can create his/her own profile)
// @TODO    Develop validations in checkProfileInput
router.post('/', checkToken, checkProfileInput, async (req, res) => {
  try {
    // check if the profile already exists
    const profileData = await db.query(
      'SELECT * FROM profiles WHERE user_id = $1;',
      [req.user.id]
    );

    if (profileData.rows[0]) {
      return res.status(400).json({
        message: 'A profile already exists for this user',
        results: profileData.rows.length,
      });
    }

    // save the profile to the database
    const newprofileData = await db.query(
      `INSERT INTO profiles (user_id, is_musician, first_name, last_name, dob, phone, city, state,
         country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, 
         soundcloud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 
          $15, $16, $17, $18) RETURNING *;`,
      [
        req.user.id,
        req.body.isMusician,
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
    // save the instrument assignments to the database
    const newInstrumentAssignmentsList = [];
    for (let i = 0; i < req.body.instrumentIds.length; i++) {
      const newInstrumentAssignmentData = await db.query(
        `INSERT INTO instrument_assignments 
      (profile_id, instrument_id, proficiency) VALUES ($1, $2, $3) RETURNING *;`,
        [
          newprofileData.rows[0].id,
          req.body.instrumentIds[i],
          req.body.proficiencies[i],
        ]
      );
      newInstrumentAssignmentsList.push(newInstrumentAssignmentData.rows[0]);
    }
    // save the genre assignments to the database
    const newGenreAssignmentsList = [];
    for (let i = 0; i < req.body.genreIds.length; i++) {
      const newGenreAssignmentData = await db.query(
        `INSERT INTO genre_assignments 
      (profile_id, genre_id) VALUES ($1, $2) RETURNING *;`,
        [newprofileData.rows[0].id, req.body.genreIds[i]]
      );
      newGenreAssignmentsList.push(newGenreAssignmentData.rows[0]);
    }
    // send response back to client
    res.status(200).json({
      message: 'A new profile was created.',
      // results: newprofileData.rows.length,
      instrumentAssignmentsList: toCamelCase(newInstrumentAssignmentsList),
      profile: toCamelCase(newprofileData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/profiles
// @desc    Update a profile
// @access  Private (only the logged in user can update his/her own profile)
router.put('/', checkToken, checkProfileInput, async (req, res) => {
  try {
    const updatedprofileData = await db.query(
      'UPDATE profiles SET first_name = $1, last_name = $2, dob = $3, phone = $4, city = $5, state = $6, country = $7, bio = $8, band = $9, website = $10, youtube = $11, twitter = $12, facebook = $13, linkedin = $14, instagram = $15, soundcloud = $16 WHERE user_id = $17 RETURNING *;',
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
    if (!updatedprofileData.rows[0]) {
      return res.status(400).json({
        message: 'The profile does not exist.',
        results: updatedprofileData.rows.length,
      });
    }
    res.status(200).json({
      message: 'The profile was successfully updated.',
      results: updatedprofileData.rows.length,
      profile: toCamelCase(updatedprofileData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/profiles
// @desc    Delete the profile
// @access  Private (only the logged in user can delete his/her own profile)
router.delete('/', checkToken, async (req, res) => {
  try {
    const deletedprofileData = await db.query(
      'DELETE FROM profiles WHERE user_id = $1 RETURNING *;',
      [req.user.id]
    );
    if (!deletedprofileData.rows[0]) {
      return res.status(400).json({
        message: 'The profile does not exist.',
        results: deletedprofileData.rows.length,
      });
    }
    res.status(200).json({
      message: 'Your profile was successfully deleted.',
      results: deletedprofileData.rows.length,
      deletedprofile: toCamelCase(deletedprofileData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

//
