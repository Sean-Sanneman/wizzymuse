const express = require('express');
const router = express.Router();
const db = require('../db')
// @route   GET api/artists
// @desc    Get all artists
// @access  Public
router.get('/', async (req, res) => {
    try{
        const artists = await db.query('SELECT * FROM artists;');
        // res.json({
            // message: 'The artists were successsfully retrieved.', 
            // artists: artists,
        // })
        console.log(artists);
    } catch(err){
        console.log(err);
    }
    }
);

module.exports = router;