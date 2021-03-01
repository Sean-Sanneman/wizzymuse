require('dotenv').config();
const express = require('express');
const testRouter = require('./routes/test-route');

const app = express();

// MIDDLEWARE
app.use(express.json()); // this allows us to access req.body
// attach routers
app.use('/api/test', testRouter);
app.get('/', (req, res) => {
  try {
    res.send('Add "/api/test" for the test route');
  } catch (err) {
    console.log(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
