const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case');
const db = require('../db');

// @route   GET api/comments
// @desc    Get all comments
// @access  Public or Private? (TO DO)
router.get('/', async (req, res) => {
  try {
    const comments = await db.query('SELECT * FROM comments;');
    res.json({
      message: 'The comments were retrieved.',
      comments: toCamelCase(comments.rows),
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   GET api/comments/:id
// @desc    Get one comment
// @access  Private (TO DO)
router.get('/:id', async (req, res) => {
  try {
    const selectedComment = await db.query(
      'SELECT * FROM comments WHERE id = $1;',
      [req.params.id]
    );
    if (selectedComment.rows[0]) {
      res.json({
        message: 'The selected comment was successfully retrieved.',
        category: toCamelCase(selectedComment.rows)[0],
      });
    } else {
      res.json({
        message: 'The comment does not exist.',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   POST api/comments
// @desc    Create a new comment
// @access  Private (TO DO)
router.post('/', async (req, res) => {
  try {
    const newComment = await db.query(
      'INSERT INTO comments (post_id, user_id) VALUES ($1, $2) RETURNING *;',
      [req.body.postId, req.body.userId]
    );
    res.json({
      message: 'A new comment was created.',
      comment: toCamelCase(newComment.rows)[0],
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   PUT api/comments/:id
// @desc    Update a comment
// @access  Private (TO DO)
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await db.query(
      'UPDATE comments SET post_id = $1, user_id = $2 WHERE id = $3 RETURNING *;',
      [req.body.postId, req.body.userId, req.params.id]
    );
    if (updatedComment.rows[0]) {
      res.json({
        message: 'The comment was successfully updated.',
        comment: toCamelCase(updatedComment.rows)[0],
      });
    } else {
      res.json({
        message: 'The comment does not exist.',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   DELETE api/comments/:id
// @desc    Delete a comment
// @access  Private (TO DO)
router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await db.query(
      'DELETE FROM comments WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedComment.rows[0]) {
      res.json({
        message: 'The selected comment was successfully deleted.',
        comment: toCamelCase(deletedComment.rows)[0],
      });
    } else {
      res.json({
        message: 'The comment does not exist.',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
