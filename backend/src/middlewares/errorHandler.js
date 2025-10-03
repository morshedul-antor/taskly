export const errorHandler = (err, req, res, next) => {
  const {
    error = "ServerError",
    message = "Internal server error",
    statusCode = 500,
  } = err;
  res.status(statusCode).json({ error, message, statusCode });
};
