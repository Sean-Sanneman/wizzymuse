require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const cors = require('cors');

// Import our routes
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const profilesRouter = require('./routes/profiles');
const connectionsRouter = require('./routes/connections');
const instrumentsRouter = require('./routes/instruments');
const genresRouter = require('./routes/genres');
const categoriesRouter = require('./routes/categories');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

// Create the Express application
const app = express();

// MIDDLEWARE - General
app.use(cors()); // this allows http requests to servers with different domain names (we are going back and forth between localhost:3000 and localhost:5000 for our http requests)
app.use(express.json()); // this allows us to access req.body

// MIDDLEWARE - Routes
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/connections', connectionsRouter);
app.use('/api/instruments', instrumentsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.get('/', (req, res) => {
  res.send("WELCOME TO WIZZYMUSE' SERVER SIDE!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
