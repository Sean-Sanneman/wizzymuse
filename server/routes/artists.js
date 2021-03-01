const express = require('express');
const router = express.Router();
const db = require('../db')

// @route   GET api/artists
// @desc    Get all artists
// @access  Public
router.get('/', async (req, res) => {
    try{
        const artists = await db.query('SELECT * FROM artists;');
        res.json({
            message: 'The artists were successfully retrieved.', 
            artists: artists.rows,
        })
    } catch(err){
        console.log(err);
    }
    }
);

// @route   GET api/artists/:id/
// @desc    Get one artist
// @access  Private (to do)
router.get('/:id', async (req, res) => {
    try{
        const selectedArtist = await db.query('SELECT * FROM artists WHERE id = $1;', [req.params.id]);
        console.log(selectedArtist.rows);
        console.log(selectedArtist.rows === []);
        if (selectedArtist.rows !== []){
            res.json({
                message: 'The selected artist was successfully retrieved.', 
                artist: selectedArtist.rows[0],
            })
        } else {
            res.json({
                message: 'The selected artist does not exist.', 
            })
        }
    } catch(err){
        console.log(err);
    }
    }
);

// @route   POST api/artists
// @desc    Create a new artist
// @access  Private (to do)
router.post('/', async (req, res) => {
    try{
        const newArtist = await db.query('INSERT INTO artists (first_name, last_name, email, username, password, dob, phone, avatar, city, state, country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, soundcloud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *;',
            [
                req.body.first_name, 
                req.body.last_name, 
                req.body.email,
                req.body.username,
                req.body.password,
                req.body.dob,
                req.body.phone,
                req.body.avatar,
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
                req.body.soundcloud
            ]);
        res.json({
            message: 'A new artist was created.', 
            artist: newArtist.rows[0],
        })
    } catch(err){
        console.log(err);
    }
    }
);

// @route   UPDATE api/artists
// @desc    UPDATE an artist
// @access  Private (to do)
router.put('/:id', async (req, res) => {
    try{
        const updatedArtist = await db.query('UPDATE artists SET first_name = $1, last_name = $2, email = $3, username = $4, password = $5, dob = $6, phone = $7, avatar = $8, city = $9, state = $10, country = $11, bio = $12, band = $13, website = $14, youtube = $15, twitter = $16, facebook = $17, linkedin = $18, instagram = $19, soundcloud = $20 WHERE id = $21 RETURNING *;',
            [
                req.body.first_name, 
                req.body.last_name, 
                req.body.email,
                req.body.username,
                req.body.password,
                req.body.dob,
                req.body.phone,
                req.body.avatar,
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
                req.params.id
            ]);
        res.json({
            message: 'The artist has been updated.', 
            artist: updatedArtist.rows[0],
        })
    } catch(err){
        console.log(err);
    }
    }
);

// @route   DELETE api/artists/:id/
// @desc    DELETE artist
// @access  Private (to do)
router.delete('/:id', async (req, res) => {
    try{
        const deletedArtist = await db.query('DELETE FROM artists WHERE id = $1 RETURNING *;', [req.params.id]);
        res.json({
            message: 'The selected artist was successfully deleted.', 
            artist: deletedArtist.rows[0],
        })
    } catch(err){
        console.log(err);
    }
    }
);



module.exports = router;