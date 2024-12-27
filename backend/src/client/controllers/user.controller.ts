import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { CustomRequest } from "../../../types/types";
import prisma from "../../../config/prisma.config";
import { updateUserSchema } from "../../../utils/client.validator";
import { logoutUser } from "../services/auth.service";
import {
  deleteOnCloudinary,
  uploadOnCloudinary,
} from "../../../config/coudinary.config";
import { CLOUDINARY_FOLDERS } from "../../../constants/cloudinary.constants";

const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const _req = req as CustomRequest;
    const { id } = _req.user;
    const { name, dob, username, bio } = req.body;
    console.log(dob);
    const validate = updateUserSchema.safeParse({ name, dob, username, bio });
    if (!validate.success) {
      return next(createHttpError(400, validate.error.message));
    }
    const existing = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!existing) {
      logoutUser(req, res, next);
      return next(createHttpError(404, "User not found"));
    }
    const file = _req.files?.avatar?.[0].path;

    if (!file) {
      return next(createHttpError(400, "Files are required"));
    }
    const result = await uploadOnCloudinary(file, CLOUDINARY_FOLDERS.AVATARS);

    if (!result) {
      return next(createHttpError(500, "Something went wrong"));
    }
    if (existing.avatar) {
      await deleteOnCloudinary(existing.avatarId as string);
    }
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: name || existing.name,
        dob: dob || existing.dob,
        username: username || existing.username,
        bio: bio || existing.bio,
        avatar: result.secure_url || existing.avatar,
        avatarId: result.public_id || existing.avatarId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        bio: true,
        isVerified: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return next(createHttpError(500, "Failed to update user"));
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    return next(createHttpError(500, "Failed to update user"));
  }
};

export { updateUser };
