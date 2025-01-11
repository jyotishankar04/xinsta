import { Request } from "express";

export interface CustomRequest extends Request {
  user: {
    id: string;
    email: string;
  };
  files?: {
    avatar: Express.Multer.File[];
    postImages: Express.Multer.File[];
  };
}

export interface Post {
  id: string;
  caption: string;
  hashtags: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
