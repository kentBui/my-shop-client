import { catchAsync } from "./catchAsync";
import { getSession } from "next-auth/client";
import HandlerError from "../utils/handlerError";

export const isAuthenticated = catchAsync(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session)
    return next(new HandlerError("Login first to access resources", 401));

  req.user = session.user;
  next();
});

export const isUser = catchAsync(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) return next();

  req.user = session.user;
  next();
});

export const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new HandlerError(
          `Role ${req.user.role} is not allowed to access this resources`,
          403
        )
      );
    }
    next();
  };
