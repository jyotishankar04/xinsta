import { IUser } from "./user.type";

export interface Post {
  id: string;
  caption: string;
  likesCount: number;
  commentCount: number;

  author: IUser;
  Images: IImage[];
  Likes: ILike[];
  Comment: IComment[];
  hashtags: IHashtag[];

  createdAt: Date;
  updatedAt: Date;
}

export interface IHashtag {
  id: string;
  name: string;
  posts?: Post[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IImage {
  id: string;
  url: string;
  postId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  id: string;
  content: string;
  author: IUser;
  authorId: string;
  postId: string;
  replies: IComment;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILike {
  id: string;
  postId: string;
  userId: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}
