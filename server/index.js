require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const artistsRouter = require('./routes/artists');
const instrumentsRouter = require('./routes/instruments');

const app = express(); // Create the Express application

// MIDDLEWARE - General
app.use(cors()); // this allows http requests to servers with different domain names (we are going back and forth between localhost:3000 and localhost:5000 for our http requests)
app.use(express.json()); // this allows us to access req.body

// MIDDLEWARE - Routes
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/instruments', instrumentsRouter);
app.get('/', (req, res) => {
  res.send("WELCOME TO WIZZYMUSE' SERVER SIDE!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
