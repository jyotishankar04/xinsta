"use client";

import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import {
  FaBookmark,
  FaCommentAlt,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/25568827/pexels-photo-25568827/free-photo-of-smiling-couple-with-vintage-album.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque accusantium, natus quidem voluptate fugiat vel delectus, quo aperiam!",
      likes: 20,
      comments: 10,
      shares: 5,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/17042332/pexels-photo-17042332/free-photo-of-brunette-wearing-eyeglasses-in-store-with-vinyl-record.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque accusantium, natus quidem voluptate fugiat vel delectus, quo aperiam!",
      likes: 20,
      comments: 10,
      shares: 5,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque accusantium, natus quidem voluptate fugiat vel delectus, quo aperiam!",
      likes: 20,
      comments: 10,
      shares: 5,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/9093331/pexels-photo-9093331.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque accusantium, natus quidem voluptate fugiat vel delectus, quo aperiam!",
      likes: 20,
      comments: 10,
      shares: 5,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/25568827/pexels-photo-25568827/free-photo-of-smiling-couple-with-vintage-album.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque accusantium, natus quidem voluptate fugiat vel delectus, quo aperiam!",
      likes: 26,
      comments: 10,
      shares: 5,
      isLiked: false,
      isBookmarked: false,
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col gap-5 max-h-full overflow-auto border border-default-50 rounded-small p-2">
      {posts.map((post) => (
        <Card key={post.id} className="w-full rounded-small">
          <CardHeader className="flex justify-between">
            <div>
              <div className="text-default-600 text-xl font-semibold flex items-center gap-2">
                <Image
                  alt="User Avatar"
                  className="rounded-full h-10 w-10 "
                  height={60}
                  src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                  width={60}
                />
                <div className="flex flex-col text-sm md:text-xl">
                  User Name
                  <span className="text-default-300 text-xs"> - 12:30 PM</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                className="px-10 rounded-small"
                color="default"
                variant="light"
              >
                Follow
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-default-400 text-small md:text-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque accusantium, natus quidem voluptate fugiat vel
              delectus, quo aperiam!
            </p>
            <div className="mt-3 rounded-small">
              <Image
                alt="Post Image"
                className="rounded-small object-cover h-auto w-full"
                height={320}
                src={post.image}
                width={600}
              />
            </div>
          </CardBody>
          <CardFooter className="flex justify-between">
            <div className="flex md:gap-2 gap-0">
              <Button
                className="p-2 md:text-medium text-xs flex flex-col md:flex-row gap-2 items-center rounded-small"
                color="default"
                variant="light"
                size="sm"
                onClick={() => {
                  post.isLiked
                    ? setPosts(
                        posts.map((p) =>
                          p.id === post.id
                            ? { ...p, isLiked: false, likes: p.likes - 1 }
                            : p
                        )
                      )
                    : setPosts(
                        posts.map((p) =>
                          p.id === post.id
                            ? { ...p, isLiked: true, likes: p.likes + 1 }
                            : p
                        )
                      );
                }}
              >
                <span>
                  {post.isLiked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
                {post.likes} Like
              </Button>
              <Button
                className="px-2 md:text-medium text-xs flex-col md:flex-row rounded-small"
                color="default"
                variant="light"
                size="sm"
              >
                <span>
                  <FaCommentAlt />
                </span>
                {post.comments} Comments
              </Button>
              <Button
                className="px-2 md:text-medium text-xs flex-col md:flex-row rounded-small"
                color="default"
                size="sm"
                variant="light"
              >
                <span>
                  <FaShare />
                </span>
                {post.shares} Share
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                className="p-2 md:text-medium flex flex-col md:flex-row text-xs rounded-small"
                color="default"
                variant="light"
                size="sm"
                onClick={() => {
                  console.log(post.isBookmarked);
                  post.isBookmarked
                    ? setPosts(
                        posts.map((p) =>
                          p.id === post.id ? { ...p, isBookmarked: false } : p
                        )
                      )
                    : setPosts(
                        posts.map((p) =>
                          p.id === post.id ? { ...p, isBookmarked: true } : p
                        )
                      );
                }}
              >
                <span>
                  {post.isBookmarked ? (
                    <FaBookmark className="text-red-950" />
                  ) : (
                    <FaRegBookmark />
                  )}
                </span>
                {post.isBookmarked ? "Saved" : "Save"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
