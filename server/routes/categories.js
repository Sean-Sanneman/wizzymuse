const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case')
const db = require('../db');

// @route   GET api/categories
// @desc    Get all categories
// @access  Public or Private? (TO DO)
router.get('/', async(req, res) => {
  try {
    const categories = await db.query('SELECT * FROM categories;')
    res.json({
      message: 'The categories were retrieved.',
      categories: toCamelCase(categories.rows),
    });
  } catch(err) {
    console.log(err);
  }
});

// @route   GET api/categories/:id
// @desc    Get one category
// @access  Private (TO DO)
router.get('/:id', async (req, res) => {
  try {
    const selectedCategory = await db.query(
      'SELECT * FROM categories WHERE id = $1;',
      [req.params.id]
    );
    if (selectedCategory.rows[0]) {
      res.json({
        message: 'The selected category was successfully retrieved.',
        category: toCamelCase(selectedCategory.rows)[0],
      });
    } else {
      res.json({
        message: 'The category does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   POST api/categories
// @desc    Create a new category
// @access  Private (TO DO)
router.post('/', async (req, res) => {
  try {
    const newCategory = await db.query(
      'INSERT INTO categories (title, description) VALUES ($1, $2) RETURNING *;',
      [
        req.body.title,
        req.body.description
      ]
    );
    res.json({
      message: 'A new category was created.',
      category: toCamelCase(newCategory.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/categories/:id
// @desc    Update a category
// @access  Private (TO DO)
router.put('/:id', async(req, res) => {
  try {
    const updatedCategory = await db.query(
      'UPDATE categories SET title = $1, description = $2 WHERE id = $3 RETURNING *;',
      [
        req.body.title,
        req.body.description,
        req.params.id,
      ]
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
    console.log(err);
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
  }  catch (err) {
    console.log(err);
  }
});


module.exports = router;