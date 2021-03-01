const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.send({ hi: 'there' });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
