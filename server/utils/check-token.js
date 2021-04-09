require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // get token from header
  const token = req.header('x-auth-token');

  // check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user; // attach payload to req
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token not valid' });
  }
};
