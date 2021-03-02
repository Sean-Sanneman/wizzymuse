require('dotenv').config();
const express = require('express');
const artistsRouter = require('./routes/artists');
const app = express();

// MIDDLEWARE
app.use(express.json()); // this allows us to access req.body
// attach routers
app.use('/api/artists', artistsRouter);
app.get('/', (req, res) => {
  res.send("WELCOME TO WIZZYMUSE' SERVER SIDE!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
