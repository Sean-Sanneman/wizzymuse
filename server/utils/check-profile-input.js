module.exports = function (req, res, next) {
  const { firstName, lastName, dob, phone } = req.body;

  if (!firstName) {
    return res.status(400).json({
      message: 'Missing first name',
    });
  }
  //@TODO: implment validation logic on lastName, dob, and phone

  next();
};
