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
// @status  checked, in use
router.get('/me', checkToken, async (req, res) => {
  try {
    // retrieve the user's profile information
    const profileMeData = await db.query(
      `SELECT users.email, users.username, users.avatar, profiles.id, profiles.first_name, 
      profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
      profiles.bio, profiles.band, profiles.artist_name, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
      profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, profiles.created_at
      FROM profiles LEFT JOIN users ON (users.id = profiles.user_id) WHERE profiles.user_id = $1;`,
      [req.user.id]
    );

    if (!profileMeData.rows[0]) {
      return res
        .status(400)
        .json({ message: 'There is no profile for this user' });
    }

    // build the profileMeObj to return
    const profileMeObj = toCamelCase(profileMeData.rows)[0];

    // retrieve the user's instruments
    const instrumentsMeData = await db.query(
      `SELECT instruments.id, instruments.instrument_name FROM instrument_assignments LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) WHERE instrument_assignments.profile_id = $1;`,
      [profileMeData.rows[0].id]
    );
    instrumentsMeData.rows
      ? (profileMeObj.instruments = toCamelCase(instrumentsMeData.rows))
      : (profileMeObj.instruments = []);

    // retrieve the user's genres
    const genresMeData = await db.query(
      `SELECT genres.id, genres.genre_name FROM genre_assignments LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) WHERE genre_assignments.profile_id = $1;`,
      [profileMeData.rows[0].id]
    );
    genresMeData.rows
      ? (profileMeObj.genres = toCamelCase(genresMeData.rows))
      : (profileMeObj.genres = []);

    res.status(200).json(profileMeObj);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profiles
// @desc    Get profiles - will return all profiles or filter by query parameters if there are any
// @access  Public
// @status  checked, in use
router.get('/', async (req, res) => {
  // extract the query filters
  let filters;
  let instrumentsFilterArr;
  let genresFilterArr;
  let profileIdsFilterArr;
  if (req.query.instruments !== '') {
    instrumentsFilterArr = req.query.instruments
      .split(',')
      .map((id) => parseInt(id));
    filters = 'instruments';
    if (req.query.genres !== '') {
      genresFilterArr = req.query.genres.split(',').map((id) => parseInt(id));
      filters = 'instruments+genres';
    }
  } else if (req.query.genres !== '') {
    genresFilterArr = req.query.genres.split(',').map((id) => parseInt(id));
    filters = 'genres';
  } else if (req.query.profileIds !== '') {
    profileIdsFilterArr = req.query.profileIds
      .split(',')
      .map((id) => parseInt(id));
    filters = 'profileIds';
  } else {
    filters = 'none';
  }

  // get profiles depending on filters
  try {
    let profilesData;
    switch (filters) {
      case 'instruments+genres':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.artist_name, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, profiles.created_at FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE instrument_id = ANY ($1) AND genre_id = ANY ($2) ORDER BY users.username;`,
          [instrumentsFilterArr, genresFilterArr]
        );
        break;
      case 'instruments':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.artist_name, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, profiles.created_at FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE instrument_id = ANY ($1) ORDER BY users.username;`,
          [instrumentsFilterArr]
        );
        break;
      case 'genres':
        profilesData = await db.query(
          `SELECT DISTINCT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, 
          profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
          profiles.bio, profiles.band, profiles.artist_name, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
          profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, profiles.created_at FROM instrument_assignments LEFT JOIN genre_assignments ON (genre_assignments.profile_id = instrument_assignments.profile_id) LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) LEFT JOIN profiles on (profiles.id = instrument_assignments.profile_id) LEFT JOIN users on (users.id = profiles.user_id) WHERE genre_id = ANY ($1) ORDER BY users.username;`,
          [genresFilterArr]
        );
        break;
      case 'profileIds':
        profilesData = await db.query(
          `SELECT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, profiles.last_name, 
          profiles.dob, profiles.phone, profiles.city, profiles.state, 
          profiles.country, profiles.bio, profiles.band, profiles.artist_name, profiles.website, 
          profiles.youtube, profiles.twitter, profiles.facebook, profiles.linkedin, 
          profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, 
          profiles.created_at FROM profiles INNER JOIN users ON (users.id = profiles.user_id) WHERE profiles.id = ANY ($1) ORDER BY users.username;`,
          [profileIdsFilterArr]
        );
        break;
      default:
        profilesData = await db.query(
          `SELECT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, profiles.last_name, 
            profiles.dob, profiles.phone, profiles.city, profiles.state, 
            profiles.country, profiles.bio, profiles.band, profiles.artist_name, profiles.website, 
            profiles.youtube, profiles.twitter, profiles.facebook, profiles.linkedin, 
            profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, 
            profiles.created_at FROM profiles INNER JOIN users ON (users.id = profiles.user_id) ORDER BY users.username;`
        );
    }

    // build the profileListObj to return
    const profileListObj = toCamelCase(profilesData.rows);

    // retrieve the instruments and the genres for each profile
    for (let i = 0; i < profileListObj.length; i++) {
      const instrumentsData = await db.query(
        `SELECT instruments.id, instruments.instrument_name FROM instrument_assignments LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id) WHERE instrument_assignments.profile_id = $1;`,
        [profileListObj[i].id]
      );
      instrumentsData.rows
        ? (profileListObj[i].instruments = toCamelCase(instrumentsData.rows))
        : (profileListObj[i].instruments = []);

      const genresData = await db.query(
        `SELECT genres.id, genres.genre_name FROM genre_assignments LEFT JOIN genres ON (genres.id = genre_assignments.genre_id) WHERE genre_assignments.profile_id = $1;`,
        [profileListObj[i].id]
      );
      genresData.rows
        ? (profileListObj[i].genres = toCamelCase(genresData.rows))
        : (profileListObj[i].genres = []);
    }

    res.status(200).json(profileListObj);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/profiles/:id
// @desc    Get one profile by profile ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const selectedprofileData = await db.query(
      `SELECT users.email, users.username, users.avatar, profiles.id, profiles.user_id, profiles.first_name, 
      profiles.last_name, profiles.dob, profiles.phone, profiles.city, profiles.state, profiles.country, 
      profiles.bio, profiles.band, profiles.artist_name, profiles.website, profiles.youtube, profiles.twitter, profiles.facebook, 
      profiles.linkedin, profiles.instagram, profiles.soundcloud, profiles.twitch, profiles.tiktok, profiles.created_at, 
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
      });
    }

    // save the profile to the database
    const newProfileData = await db.query(
      `INSERT INTO profiles (user_id, first_name, last_name, dob, phone, city, state,
         country, bio, band, artist_name, website, youtube, twitter, facebook, linkedin, instagram, 
         soundcloud, twitch, tiktok) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 
          $15, $16, $17, $18, $19, $20) RETURNING *;`,
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
        req.body.artistName,
        req.body.website,
        req.body.youtube,
        req.body.twitter,
        req.body.facebook,
        req.body.linkedin,
        req.body.instagram,
        req.body.soundcloud,
        req.body.twitch,
        req.body.tiktok,
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
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/profiles
// @desc    Update a user's profile
// @access  Private (only the logged in user can update his/her own profile)
// @TODO    Develop validations in checkProfileInput
router.put('/', checkToken, async (req, res) => {
  try {
    // update the profile to the database
    const updatedProfileData = await db.query(
      'UPDATE profiles SET first_name = $1, last_name = $2, dob = $3, phone = $4, city = $5, state = $6, country = $7, bio = $8, band = $9, artist_name = $10, website = $11, youtube = $12, twitter = $13, facebook = $14, linkedin = $15, instagram = $16, soundcloud = $17, twitch = $18, tiktok = $19 WHERE user_id = $20 RETURNING *;',
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
        req.body.artistName,
        req.body.website,
        req.body.youtube,
        req.body.twitter,
        req.body.facebook,
        req.body.linkedin,
        req.body.instagram,
        req.body.soundcloud,
        req.body.twitch,
        req.body.tiktok,
        req.user.id,
      ]
    );

    // verify that the user's profile exists
    if (!updatedProfileData.rows[0]) {
      return res.status(400).json({
        message: 'The profile does not exist.',
      });
    }

    // update the instrument assignments to the database
    await db.query(
      'DELETE FROM instrument_assignments WHERE profile_id = $1;',
      [updatedProfileData.rows[0].id]
    );
    for (let i = 0; i < req.body.instruments.length; i++) {
      await db.query(
        `INSERT INTO instrument_assignments 
      (profile_id, instrument_id) VALUES ($1, $2);`,
        [updatedProfileData.rows[0].id, parseInt(req.body.instruments[i].id)]
      );
    }

    // update the genre assignments to the database
    await db.query('DELETE FROM genre_assignments WHERE profile_id = $1;', [
      updatedProfileData.rows[0].id,
    ]);

    for (let i = 0; i < req.body.genres.length; i++) {
      await db.query(
        `INSERT INTO genre_assignments 
      (profile_id, genre_id) VALUES ($1, $2);`,
        [updatedProfileData.rows[0].id, req.body.genres[i].id]
      );
    }

    // send response back to client
    res.status(200).json({
      message: 'Your profile was successfully updated.',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
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
      });
    }
    res.status(200).json({
      message: 'Your profile was successfully deleted.',
      deletedprofile: toCamelCase(deletedprofileData.rows)[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
