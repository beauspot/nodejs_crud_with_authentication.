const { CustomAPIError } = require("../utils/customErrorClass");
const statusCodes = require("http-status-codes");

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  } else {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
  }
};
