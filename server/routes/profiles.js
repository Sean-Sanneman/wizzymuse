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
      `SELECT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
      profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
      profiles.bio, profiles.band, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
      profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.created_at, 
      instruments.instrument_name, genres.genre_name 
      FROM profiles LEFT JOIN users ON (users.id = profiles.user_id)
      LEFT JOIN instrument_assignments ON (profiles.id = instrument_assignments.profile_id)
      LEFT JOIN genre_assignments ON (profiles.id = genre_assignments.profile_id)
      LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id)
      LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) WHERE profiles.user_id = $1;`,
      [req.user.id]
    );

    if (!profileData.rows[0]) {
      return res
        .status(400)
        .json({ message: 'There is no profile for this user' });
    }
    res.status(200).json({
      message: 'Your profile information was successfully retrieved.',
      results: profileData.rows.length,
      profileMe: toCamelCase(profileData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profiles
// @desc    Get profiles - will return all profiles or filter by query parameters if there are any
// @access  Public
// @TODO    JOIN instruments and genres tables, ORDER BY?
router.get('/', async (req, res) => {
  let filters;
  let instrumentsFilterArr;
  let genresFilterArr;
  if (req.query.instruments !== 'undefined') {
    instrumentsFilterArr = req.query.instruments
      .split(',')
      .map((id) => parseInt(id));
    filters = 'instruments';
    if (req.query.genres !== 'undefined') {
      genresFilterArr = req.query.genres.split(',').map((id) => parseInt(id));
      filters = 'instruments+genres';
    }
  } else if (req.query.genres !== 'undefined') {
    genresFilterArr = req.query.genres.split(',').map((id) => parseInt(id));
    filters = 'genres';
  } else {
    filters = 'none';
  }

  try {
    let profilesData;
    switch (filters) {
      case 'instruments+genres':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.created_at, 
          instruments.instrument_name, genres.genre_name FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE instrument_id = ANY ($1) AND genre_id = ANY ($2);`,
          [instrumentsFilterArr, genresFilterArr]
        );
        break;
      case 'instruments':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.created_at, 
          instruments.instrument_name, genres.genre_name FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE instrument_id = ANY ($1);`,
          [instrumentsFilterArr]
        );
        break;
      case 'genres':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.created_at, 
          instruments.instrument_name, genres.genre_name FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE genre_id = ANY ($1);`,
          [genresFilterArr]
        );
        break;
      default:
        profilesData = await db.query(
          `SELECT users.email, users.username, users.avatar, profiles.id, profiles.first_name, profiles.last_name, 
            profiles.dob, profiles.phone, profiles.city, profiles.state, 
            profiles.country, profiles.bio, profiles.band, profiles.website, 
            profiles.youtube, profiles.twitter, profiles.facebook, profiles.linkedin, 
            profiles.instagram, profiles.soundcloud, 
            profiles.created_at FROM profiles INNER JOIN users ON (users.id = profiles.user_id) ORDER BY users.username;`
        );
    }
    res.status(200).json({
      message: 'The profiles were successfully retrieved.',
      results: toCamelCase(profilesData.rows).length,
      profileList: toCamelCase(profilesData.rows),
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
      instruments.instrument_name, genres.genre_name 
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
    const newProfileData = await db.query(
      `INSERT INTO profiles (user_id, first_name, last_name, dob, phone, city, state,
         country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, 
         soundcloud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 
          $15, $16, $17) RETURNING *;`,
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
    // save the instrument assignments to the database
    const newInstrumentAssignmentsList = [];
    for (let i = 0; i < req.body.instrumentIds.length; i++) {
      const newInstrumentAssignmentData = await db.query(
        `INSERT INTO instrument_assignments 
      (profile_id, instrument_id) VALUES ($1, $2) RETURNING *;`,
        [newProfileData.rows[0].id, req.body.instrumentIds[i]]
      );
      newInstrumentAssignmentsList.push(newInstrumentAssignmentData.rows[0]);
    }
    // save the genre assignments to the database
    const newGenreAssignmentsList = [];
    for (let i = 0; i < req.body.genreIds.length; i++) {
      const newGenreAssignmentData = await db.query(
        `INSERT INTO genre_assignments 
      (profile_id, genre_id) VALUES ($1, $2) RETURNING *;`,
        [newProfileData.rows[0].id, req.body.genreIds[i]]
      );
      newGenreAssignmentsList.push(newGenreAssignmentData.rows[0]);
    }
    // send response back to client
    res.status(200).json({
      message: 'A new profile was created.',
      // results: newProfileData.rows.length,
      instrumentAssignmentsList: toCamelCase(newInstrumentAssignmentsList),
      genreAssignmentsList: toCamelCase(newGenreAssignmentsList),
      profile: toCamelCase(newProfileData.rows)[0],
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
    // update the profile to the database
    const updatedProfileData = await db.query(
      'UPDATE profiles SET first_name = $1, last_name = $2, dob = $3, phone = $4, city = $5, state = $6, country = $7, bio = $8, band = $9, website = $10, youtube = $11, twitter = $12, facebook = $13, linkedin = $14, instagram = $15, soundcloud = $16, is_musician = $17 WHERE user_id = $18 RETURNING *;',
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
        req.body.isMusician,
        req.user.id,
      ]
    );

    // verify that the user's profile exists
    if (!updatedProfileData.rows[0]) {
      return res.status(400).json({
        message: 'The profile does not exist.',
        results: updatedProfileData.rows.length,
      });
    }

    // update the instrument assignments to the database
    await db.query(
      'DELETE FROM instrument_assignments WHERE profile_id = $1;',
      [updatedProfileData.rows[0].id]
    );
    const updatedInstrumentAssignmentsList = [];
    for (let i = 0; i < req.body.instrumentIds.length; i++) {
      const updatedInstrumentAssignmentData = await db.query(
        `INSERT INTO instrument_assignments 
      (profile_id, instrument_id) VALUES ($1, $2) RETURNING *;`,
        [updatedProfileData.rows[0].id, req.body.instrumentIds[i]]
      );
      updatedInstrumentAssignmentsList.push(
        updatedInstrumentAssignmentData.rows[0]
      );
    }

    // update the genre assignments to the database
    await db.query('DELETE FROM genre_assignments WHERE profile_id = $1;', [
      updatedProfileData.rows[0].id,
    ]);
    const updatedGenreAssignmentsList = [];
    for (let i = 0; i < req.body.genreIds.length; i++) {
      const updatedGenreAssignmentData = await db.query(
        `INSERT INTO genre_assignments 
      (profile_id, genre_id) VALUES ($1, $2) RETURNING *;`,
        [updatedProfileData.rows[0].id, req.body.genreIds[i]]
      );
      updatedGenreAssignmentsList.push(updatedGenreAssignmentData.rows[0]);
    }

    // send response back to client
    res.status(200).json({
      message: 'The profile was successfully updated.',
      // results: updatedProfileData.rows.length,
      instrumentAssignmentsList: toCamelCase(updatedInstrumentAssignmentsList),
      genreAssignmentsList: toCamelCase(updatedGenreAssignmentsList),
      profile: toCamelCase(updatedProfileData.rows)[0],
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
