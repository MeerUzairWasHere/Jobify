import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const getCurrentUser = async (req, res) => {
  const currentUser = await User.findOne({ _id: req.user.userId });
  const user = currentUser.toJSON();

  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);
    const res = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = res.secure_url;
    newUser.avatarPublicId = res.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updateUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ updatedUser });
};
