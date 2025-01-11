import e, { Request, Response, NextFunction } from "express";
import prisma from "../../../config/prisma.config";
import createHttpError from "http-errors";
import { postUploadSchema } from "../../../utils/client.validator";
import { getZodErrorMessage } from "../../../utils/error.utils";
import { CustomRequest } from "../../../types/globl.types";
import { validateUser } from "../services/user.service";
import {
  deleteMultipleOnCloudinary,
  uploadMultipleOnCloudinary,
  uploadOnCloudinary,
} from "../../../config/coudinary.config";
import { CLOUDINARY_FOLDERS } from "../../../constants/cloudinary.constants";
import { PostOrderTypes } from "../../../constants/post.constants";
import { getAllHashTags } from "../services/post.service";

const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  let {
    page = 1,
    limit = 10,
    sortBy = "desc",
    orderBy = "createdAt",
  } = req.query;

  try {
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);
    const order = sortBy === "asc" ? "asc" : "desc";

    const posts = await prisma.post.findMany({
      include: {
        _count: true,
        author: {
          select: {
            id: true,
            avatar: true,
            username: true,
            name: true,
          },
        },
        Images: {
          select: {
            id: true,
            url: true,
          },
        },
        hashtags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      take,
      skip,
      orderBy: {
        createdAt: order,
      },
    });
    return res.status(200).json({
      success: true,
      data: posts,
      take,
      skip,
      order,
    });
  } catch (error) {
    return next(createHttpError(500, "Internal server error"));
  }
};

const uploadPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const _req = req as CustomRequest;
    const { caption } = req.body;
    const validate = postUploadSchema.safeParse({ caption });
    if (!validate.success) {
      return next(
        createHttpError(400, getZodErrorMessage({ error: validate.error }))
      );
    }

    const { id } = _req.user;
    const user = await validateUser(id);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }
    if (!_req.files?.postImages) {
      return next(createHttpError(400, "No images found"));
    }
    const images = _req.files?.postImages.map((image) => {
      return image.path;
    });

    const result = await uploadMultipleOnCloudinary(
      images as string[],
      CLOUDINARY_FOLDERS.POSTS
    );

    if (!result) {
      return next(
        createHttpError(500, "Error in uploading post, Internal Server Error")
      );
    }
    if (result.length !== images.length) {
      await deleteMultipleOnCloudinary(result.map((res) => res.public_id));
      return next(
        createHttpError(500, "Error in uploading post, Internal Server Error")
      );
    }

    /// Algo for the #tags
    const tags = getAllHashTags(caption);

    const post = await prisma.post.create({
      data: {
        caption,
        hashtags: {
          connectOrCreate: tags.map((tag) => {
            return {
              where: {
                name: tag,
              },
              create: {
                name: tag,
              },
            };
          }),
        },
        Images: {
          create: result.map((res) => {
            return {
              publicId: res.public_id,
              url: res.secure_url,
            };
          }),
        },
        author: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    if (!post) {
      await deleteMultipleOnCloudinary(result.map((res) => res.public_id));
      return next(
        createHttpError(500, "Error in uploading post, Internal Server Error")
      );
    }
    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error:", error);
    next(
      createHttpError(500, "Error in uploading post, Internal Server Error")
    );
  }
};

export { getAllPosts, uploadPost };
