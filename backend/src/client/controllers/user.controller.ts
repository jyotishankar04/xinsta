import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "../../../types/globl.types";
import { updateUserSchema } from "../../../utils/client.validator";
import { getZodErrorMessage } from "../../../utils/error.utils";
import prisma from "../../../config/prisma.config";
import {
  deleteOnCloudinary,
  uploadOnCloudinary,
} from "../../../config/coudinary.config";
import { CLOUDINARY_FOLDERS } from "../../../constants/cloudinary.constants";
import { normalizeDate } from "../../../lib/momentjs";
import createHttpError from "http-errors";

const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const _req = req as CustomRequest;
    const { id } = _req.user;
    const { name, dob, username, bio } = req.body;
    const date = normalizeDate(dob);
    console.log("Date:", date);
    const validate = updateUserSchema.safeParse({ name, date, username, bio });
    if (!validate.success) {
      console.error("Validation failed:", validate.error);
      return next(createHttpError(400, getZodErrorMessage(validate)));
    }

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      console.error("User not found:", id);
      return next(createHttpError(404, "User not found"));
    }

    const file = _req.files?.avatar?.[0]?.path;
    if (!file) {
      console.error("File not provided");
      return next(createHttpError(400, "File not provided"));
    }

    const result = await uploadOnCloudinary(file, CLOUDINARY_FOLDERS.AVATARS);
    if (!result) {
      console.error("Cloudinary upload failed");
      return next(createHttpError(500, "Failed to upload file"));
    }

    if (existing.avatar && existing.avatarId) {
      const deleteRes = await deleteOnCloudinary(existing.avatarId as string);
      if (!deleteRes) {
        console.error("Failed to delete old avatar");
        console.log("Old avatar:", existing.avatarId);
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        name: name || existing.name,
        dob: date || existing.dob,
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
        dob: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: { user },
    });
  } catch (error) {
    console.error("Failed to update user:", error);
    return next(createHttpError(500, "Failed to update user"));
  }
};

export { updateUser };
