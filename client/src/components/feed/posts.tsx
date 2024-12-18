"use client";

import PostCard from "./postCard";
import { posts } from "@/constants/db";
const Posts = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 max-h-full overflow-y-auto border border-default-50 rounded-small p-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
