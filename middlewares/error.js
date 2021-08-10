import HandlerError from "../utils/handlerError";

export const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  // check wrong mongo id
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new HandlerError(message, 404);
  }

  // check mongo validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new HandlerError(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: error.message,
    error,
    stack: error.stack,
  });
};
