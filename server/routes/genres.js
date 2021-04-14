const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case');
const db = require('../db');
const checkToken = require('../utils/check-token');

// @route   GET api/genres
// @desc    Get all genres
// @access  Public
// @status  checked, in use
router.get('/', async (req, res) => {
  try {
    const genreData = await db.query(
      'SELECT * FROM genres ORDER BY genre_name ASC;'
    );
    res.json(toCamelCase(genreData.rows));
  } catch (err) {
    console.log(err);
  }
});

// @route   GET api/genres/:id
// @desc    Get one genre
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const selectedGenre = await db.query(
      'SELECT * FROM genres WHERE id = $1;',
      [req.params.id]
    );
    if (selectedGenre.rows[0]) {
      res.json({
        message: 'The selected genre was successfully retrieved.',
        genre: toCamelCase(selectedGenre.rows)[0],
      });
    } else {
      res.json({
        message: 'The genre does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   POST api/genres
// @desc    Create a new genre
// @access  Private
router.post('/', checkToken, async (req, res) => {
  try {
    const newGenre = await db.query(
      'INSERT INTO genres (genre_name) VALUES ($1) RETURNING *;',
      [req.body.genreName]
    );
    res.json({
      message: 'A new genre was created.',
      genre: toCamelCase(newGenre.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/genres/:id
// @desc    Update a genre
// @access  Private
router.put('/:id', checkToken, async (req, res) => {
  try {
    const updatedGenre = await db.query(
      'UPDATE genres SET genre_name = $1 WHERE id = $2 RETURNING *;',
      [req.body.genreName, req.params.id]
    );
    if (updatedGenre.rows[0]) {
      res.json({
        message: 'The genre was successfully updated.',
        genre: toCamelCase(updatedGenre.rows)[0],
      });
    } else {
      res.json({
        message: 'The genre does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/genres/:id
// @desc    Delete a genre
// @access  Private
router.delete('/:id', checkToken, async (req, res) => {
  try {
    const deletedGenre = await db.query(
      'DELETE FROM genres WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedGenre.rows[0]) {
      res.json({
        message: 'The selected genre was successfully deleted.',
        genre: toCamelCase(deletedGenre.rows)[0],
      });
    } else {
      res.json({
        message: 'The genre does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
