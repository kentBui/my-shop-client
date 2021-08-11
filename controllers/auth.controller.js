import { catchAsync } from "../middlewares/catchAsync";
import User from "../models/user.model";
import cloudinary from "cloudinary";
import HandlerError from "../utils/handlerError";
import absoluteUrl from "next-absolute-url";
import { sendEmail } from "../utils/sendMail";
import crypto from "crypto";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// get all users => /api/auth
export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    // users,
  });
});

// register => /api/auth/register
export const registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  let result;
  if (req.body.avatar) {
    result = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "my_shop/avatars",
      width: "150",
      crop: "scale",
    });
  } else {
    result = {
      public_id: "public_id",
      secure_url: "secure_url",
    };
  }

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  if (!user) return next(new HandlerError("User can not created", 400));

  res.status(201).json({
    success: true,
    user,
  });
});

// get profile => api/me
export const getProfile = catchAsync(async (req, res, next) => {
  if (!req.user) return next();

  const user = await User.findById(req.user._id).select("-password");

  if (!user) return next();

  res.status(200).json({
    success: true,
    user,
  });
});

// forgot password => /api/password/forgot
export const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return next(new HandlerError("Do not found user with this info", 404));

  // get reset token
  const resetToken = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // get origin
  const { origin } = absoluteUrl(req);

  // create password reset url
  const resetUrl = `${origin}/password/reset/${resetToken}`;

  const html = `<p>Your password reset url is as follow : <a href="${origin}/password/reset/${resetToken}">${resetUrl}</a>
  If you have not request this email, then ignore it.</p>`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password recovery",
      html,
    });

    res.status(200).json({
      success: true,
      message: `Email send to : ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new HandlerError(error.message, 500));
  }
});

// reset password => /api/password/reset/:token
export const resetPassword = catchAsync(async (req, res, next) => {
  // get resetPasswordToken from token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.query.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  // console.log(req.body.password);

  if (!user)
    return next(
      new HandlerError(
        "Password reset token is invalid or has been expired",
        400
      )
    );

  if (!req.body.password || !req.body.confirmPassword)
    return next(
      new HandlerError("Please enter passwor or confirm password", 400)
    );

  if (req.body.password !== req.body.confirmPassword)
    return next(new HandlerError("Password does not match", 400));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password updated success",
  });
});
