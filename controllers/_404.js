exports.err404 = (req, res, next) => {
  res.status(404).json({ message: `Resource cannot be Found` });
};
