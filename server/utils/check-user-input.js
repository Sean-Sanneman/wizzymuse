module.exports = function (req, res, next) {
  const { email, username, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === '/register') {
    if (![email, username, password].every(Boolean)) {
      return res.status(400).json({
        message: 'Missing credentials',
      });
    } else if (!validEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email',
      });
    } else if (password.length < 6) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(400).json({
        message: 'Missing credentials',
      });
    } else if (!validEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email',
      });
    } else if (password.length < 6) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }
  }

  next();
};
