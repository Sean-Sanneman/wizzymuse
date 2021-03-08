const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case')
const db = require('../db');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public or Private? (TO DO)
router.get('/', async(req, res) => {
  try {
    const posts = await db.query('SELECT * FROM posts;')
    res.json({
      message: 'The posts were retrieved.',
      posts: toCamelCase(posts.rows),
    });
  } catch(err) {
    console.log(err);
  }
});

// @route   GET api/posts/:id
// @desc    Get one post
// @access  Private (TO DO)
router.get('/:id', async (req, res) => {
  try {
    const selectedPost = await db.query(
      'SELECT * FROM posts WHERE id = $1;',
      [req.params.id]
    );
    if (selectedPost.rows[0]) {
      res.json({
        message: 'The selected post was successfully retrieved.',
        category: toCamelCase(selectedPost.rows)[0],
      });
    } else {
      res.json({
        message: 'The post does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   POST api/posts
// @desc    Create a new post
// @access  Private (TO DO)
router.post('/', async (req, res) => {
  try {
    const newPost = await db.query(
      'INSERT INTO posts (user_id, category_id, post_text) VALUES ($1, $2, $3) RETURNING *;',
      [
        req.body.userId,
        req.body.categoryId,
        req.body.postText
      ]
    );
    res.json({
      message: 'A new post was created.',
      post: toCamelCase(newPost.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Private (TO DO)
router.put('/:id', async(req, res) => {
  try {
    const updatedPost = await db.query(
      'UPDATE posts SET user_id = $1, category_id = $2, post_text = $3 WHERE id = $4 RETURNING *;',
      [
        req.body.userId,
        req.body.categoryId,
        req.body.postText,
        req.params.id,
      ]
    );
    if (updatedPost.rows[0]) {
      res.json({
        message: 'The post was successfully updated.',
        post: toCamelCase(updatedPost.rows)[0],
      });
    } else {
      res.json({
        message: 'The post does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private (TO DO)
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await db.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedPost.rows[0]) {
      res.json({
        message: 'The selected post was successfully deleted.',
        post: toCamelCase(deletedPost.rows)[0],
      });
    } else {
      res.json({
        message: 'The post does not exist.',
      });
    }
  }  catch (err) {
    console.log(err);
  }
});


module.exports = router;