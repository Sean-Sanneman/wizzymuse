const express = require('express');
const router = express.Router();
const toCamelCase = require('../utils/to-camel-case');
const db = require('../db');
const checkToken = require('../utils/check-token');

// @route   GET api/instruments
// @desc    Get all instruments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const instrumentData = await db.query(
      'SELECT * FROM instruments ORDER BY instrument_name ASC;'
    );
    res.json({
      message: 'The instruments were retrieved.',
      instrumentList: toCamelCase(instrumentData.rows),
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   GET api/instruments/:id
// @desc    Get one instrument
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const selectedInstrumentData = await db.query(
      'SELECT * FROM instruments WHERE id = $1;',
      [req.params.id]
    );
    if (selectedInstrumentData.rows[0]) {
      res.json({
        message: 'The selected instrument was successfully retrieved.',
        selectedInstrumentData: toCamelCase(selectedInstrumentData.rows)[0],
      });
    } else {
      res.json({
        message: 'The instrument does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   POST api/instruments
// @desc    Create a new instrument
// @access  Private
router.post('/', checkToken, async (req, res) => {
  try {
    const newInstrumentData = await db.query(
      'INSERT INTO instruments (instrument_name) VALUES ($1) RETURNING *;',
      [req.body.instrumentName]
    );
    res.json({
      message: 'A new instrument was created.',
      newInstrumentData: toCamelCase(newInstrumentData.rows)[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   PUT api/instruments/:id
// @desc    Update an instrument
// @access  Private
router.put('/:id', checkToken, async (req, res) => {
  try {
    const updatedInstrumentData = await db.query(
      'UPDATE instruments SET instrument_name = $1 WHERE id = $2 RETURNING *;',
      [req.body.instrumentName, req.params.id]
    );
    if (updatedInstrumentData.rows[0]) {
      res.json({
        message: 'The instrument was successfully updated.',
        updatedInstrumentData: toCamelCase(updatedInstrumentData.rows)[0],
      });
    } else {
      res.json({
        message: 'The instrument does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// @route   DELETE api/instruments/:id
// @desc    Delete an instruments
// @access  Private
router.delete('/:id', checkToken, async (req, res) => {
  try {
    const deletedInstrumentData = await db.query(
      'DELETE FROM instruments WHERE id = $1 RETURNING *;',
      [req.params.id]
    );
    if (deletedInstrumentData.rows[0]) {
      res.json({
        message: 'The selected instrument was successfully deleted.',
        deletedInstrumentData: toCamelCase(deletedInstrumentData.rows)[0],
      });
    } else {
      res.json({
        message: 'The instrument does not exist.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
