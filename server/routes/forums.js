const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case');
const db = require('../db');

// @route   GET api/forums
// @desc    Get all forums
// @access  Public
// @status  checked, in use
router.get('/', async (req, res) => {
  try {
    const forumData = await db.query(
      'SELECT * FROM forums ORDER BY created_at ASC;'
    );

    // build the forumListArr to return
    const forumListArr = toCamelCase(forumData.rows);

    // for each forum:
    for (let i = 0; i < forumListArr.length; i++) {
      // retrieve the number of posts
      const nbPostsData = await db.query(
        'SELECT count(*) FROM posts WHERE topic_id = $1;',
        [forumListArr[i].id]
      );
      nbPostsData.rows
        ? (forumListArr[i].nbPosts = parseInt(nbPostsData.rows[0].count))
        : (forumListArr[i].nbPosts = 0);

      // retrieve the most recent post
      const mostRecentPostData = await db.query(
        'SELECT * FROM posts WHERE created_at = (SELECT MAX(created_at) FROM posts WHERE topic_id = $1);',
        [forumListArr[i].id]
      );
      mostRecentPostData.rows
        ? (forumListArr[i].mostRecentPost = toCamelCase(
            mostRecentPostData.rows
          )[0])
        : (forumListArr[i].mostRecentPost = null);

      // retrieve the total number of replies for this forum
      const nbForumRepliesData = await db.query(
        'SELECT count(*) FROM replies LEFT JOIN posts ON posts.id = replies.post_id WHERE posts.topic_id = $1;',
        [forumListArr[i].id]
      );
      nbForumRepliesData.rows
        ? (forumListArr[i].nbForumReplies = parseInt(
            nbForumRepliesData.rows[0].count
          ))
        : (forumListArr[i].nbForumReplies = 0);
    }
    res.status(200).json(forumListArr);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   GET api/forums/:id
// @desc    Get one forum
// @access  Public
// @status  checked, in use
router.get('/:id', async (req, res) => {
  try {
    // retrieve the forum information
    const selectedForumData = await db.query(
      'SELECT * FROM forums WHERE id = $1;',
      [req.params.id]
    );
    if (!selectedForumData.rows[0]) {
      return res.status(400).json({
        message: 'This forum was not found.',
      });
    }

    // retrieve the posts associated with this particular forum
    const selectedForumPostsData = await db.query(
      'SELECT * from posts WHERE topic_id = $1;',
      [req.params.id]
    );
    const forumPostsArr = toCamelCase(selectedForumPostsData.rows);
    // retrieve the replies for each post
    for (let i = 0; i < forumPostsArr.length; i++) {
      const repliesData = await db.query(
        'SELECT * from replies WHERE post_id = $1 ORDER BY created_at DESC',
        [forumPostsArr[i].id]
      );
      repliesData.rows
        ? (forumPostsArr[i].replies = toCamelCase(repliesData.rows))
        : (forumPostsArr[i].replies = []);
    }

    // return result
    const selectedForumObj = toCamelCase(selectedForumData.rows)[0];
    selectedForumObj.posts = forumPostsArr;
    res.status(200).json(selectedForumObj);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   POST api/categories
// @desc    Create a new category
// @access  Private (TO DO)
router.post('/', async (req, res) => {
  try {
    const newCategory = await db.query(
      'INSERT INTO categories (title, description) VALUES ($1, $2) RETURNING *;',
      [req.body.title, req.body.description]
    );
    res.json({
      message: 'A new category was created.',
      category: toCamelCase(newCategory.rows)[0],
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   PUT api/categories/:id
// @desc    Update a category
// @access  Private (TO DO)
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await db.query(
      'UPDATE categories SET title = $1, description = $2 WHERE id = $3 RETURNING *;',
      [req.body.title, req.body.description, req.params.id]
    );
    if (updatedCategory.rows[0]) {
      res.json({
        message: 'The category was successfully updated.',
        category: toCamelCase(updatedCategory.rows)[0],
      });
    } else {
      res.json({
        message: 'The category does not exist.',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   DELETE api/categories/:id
// @desc    Delete an category
// @access  Private (TO DO)
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await db.query(
      'DELETE FROM categories WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedCategory.rows[0]) {
      res.json({
        message: 'The selected category was successfully deleted.',
        category: toCamelCase(deletedCategory.rows)[0],
      });
    } else {
      res.json({
        message: 'The category does not exist.',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;