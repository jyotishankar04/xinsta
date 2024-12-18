export interface IPost {
  id: number;
  image: string[];
  description: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  commentsData?: IComment[];
}

export interface IComment {
  id: number;
  postId: number;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  likes?: number;
  isLiked?: boolean;
  replyCount?: number;
}
