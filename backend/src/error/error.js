export const badRequest = (message = "Bad request!") => ({
  error: "BadRequest",
  message,
  statusCode: 400,
});

export const unauthorized = (message = "Unauthorized!") => ({
  error: "Unauthorized",
  message,
  statusCode: 401,
});

export const forbidden = (message = "Forbidden!") => ({
  error: "Forbidden",
  message,
  statusCode: 403,
});

export const notFound = (message = "Resource not found!") => ({
  error: "NotFound",
  message,
  statusCode: 404,
});

export const methodNotAllowed = (message = "Method not allowed!") => ({
  error: "MethodNotAllowed",
  message,
  statusCode: 405,
});

export const serverError = (message = "Internal server error!") => ({
  error: "ServerError",
  message,
  statusCode: 500,
});
