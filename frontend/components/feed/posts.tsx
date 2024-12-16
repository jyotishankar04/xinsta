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
        "https://images.pexels.com/photos/9489933/pexels-photo-9489933.jpeg",
      description: "Classic architecture meeting modern photography. 🏛️📸",
      likes: 71,
      comments: 25,
      shares: 10,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/19373148/pexels-photo-19373148.jpeg",
      description: "A street filled with stories waiting to be told. 🚶‍♀️✨",
      likes: 50,
      comments: 15,
      shares: 6,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/18320670/pexels-photo-18320670.jpeg",
      description:
        "A serene moment by the lake, capturing nature's beauty. 🌊🌿",
      likes: 45,
      comments: 12,
      shares: 8,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/16876734/pexels-photo-16876734.jpeg",
      description: "Timeless smiles captured in natural light. ✨📸",
      likes: 88,
      comments: 30,
      shares: 14,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/6258306/pexels-photo-6258306.jpeg",
      description: "Capturing cozy vibes in a stylish outfit. ✨👗",
      likes: 40,
      comments: 10,
      shares: 5,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/6336570/pexels-photo-6336570.jpeg",
      description: "Moments that capture the joy of exploration. 🌍✨",
      likes: 49,
      comments: 12,
      shares: 9,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/1684724/pexels-photo-1684724.jpeg",
      description: "Every sunset brings the promise of a new dawn. 🌇✨",
      likes: 62,
      comments: 20,
      shares: 10,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/15831768/pexels-photo-15831768.jpeg",
      description: "Celebrating life with vibrant hues and happy vibes. 🌈🎭",
      likes: 90,
      comments: 35,
      shares: 18,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/9543118/pexels-photo-9543118.jpeg",
      description: "Golden hour walk through timeless ruins. 🌅🏛️",
      likes: 70,
      comments: 22,
      shares: 9,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/18997327/pexels-photo-18997327.jpeg",
      description: "Adventures by the bay with endless memories. 🌉✨",
      likes: 58,
      comments: 18,
      shares: 11,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/11749485/pexels-photo-11749485.jpeg",
      description: "The tranquil embrace of nature. 🌳🌊",
      likes: 85,
      comments: 28,
      shares: 15,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 12,
      image:
        "https://images.pexels.com/photos/2245035/pexels-photo-2245035.jpeg",
      description: "When the waves whisper stories of serenity. 🌊✨",
      likes: 73,
      comments: 21,
      shares: 13,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 13,
      image:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg",
      description: "Smiles that light up the world. A fresh green vibe! 🌿✨",
      likes: 72,
      comments: 20,
      shares: 10,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 14,
      image:
        "https://images.pexels.com/photos/8637926/pexels-photo-8637926.jpeg",
      description: "Glowing in the golden light of the evening. 🌟🌅",
      likes: 56,
      comments: 17,
      shares: 9,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 15,
      image:
        "https://images.pexels.com/photos/5992108/pexels-photo-5992108.jpeg",
      description: "A walk through timeless architecture. 🏛️✨",
      likes: 65,
      comments: 19,
      shares: 12,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 16,
      image:
        "https://images.pexels.com/photos/13709344/pexels-photo-13709344.jpeg",
      description: "Reflections of a peaceful afternoon by the water. 🌊☀️",
      likes: 82,
      comments: 24,
      shares: 15,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 17,
      image:
        "https://images.pexels.com/photos/3116901/pexels-photo-3116901.jpeg",
      description: "Under the starry skies, dreams come alive. ✨🌌",
      likes: 91,
      comments: 29,
      shares: 18,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 18,
      image:
        "https://images.pexels.com/photos/4338514/pexels-photo-4338514.jpeg",
      description: "The joy of little things amidst greenery. 🌿☀️",
      likes: 55,
      comments: 16,
      shares: 8,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 19,
      image:
        "https://images.pexels.com/photos/12816985/pexels-photo-12816985.jpeg",
      description: "Sunlit streets holding countless untold tales. 🏙️✨",
      likes: 87,
      comments: 27,
      shares: 12,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 20,
      image:
        "https://images.pexels.com/photos/7277454/pexels-photo-7277454.jpeg",
      description: "Lost in the rhythm of the mountains. 🏞️🎶",
      likes: 68,
      comments: 22,
      shares: 11,
      isLiked: true,
      isBookmarked: true,
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col gap-5 max-h-full overflow-y-auto border border-default-50 rounded-small p-2">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="w-full h-fit max-h-[90vh] flex flex-col rounded-small"
        >
          <CardHeader className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image
                alt="User Avatar"
                className="rounded-full h-10 w-10"
                height={60}
                src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                width={60}
              />
              <div className="flex flex-col text-sm md:text-xl">
                User Name
                <span className="text-default-300 text-xs"> - 12:30 PM</span>
              </div>
            </div>
            <Button
              className="px-10 md:text-medium text-xs rounded-small"
              color="default"
              size="sm"
              variant="light"
            >
              Follow
            </Button>
          </CardHeader>
          <CardBody className="overflow-auto">
            <p className="text-default-400 text-small md:text-medium">
              {post.description}
            </p>
            <div className="mt-3 rounded-small overflow-hidden">
              <Image
                alt="Post Image"
                className="rounded-small object-contain w-full max-h-[400px] md:max-h-[600px] h-auto"
                height={600}
                src={post.image}
                width={600}
              />
            </div>
          </CardBody>

          <CardFooter className="flex justify-between">
            <div className="flex md:gap-2 gap-1">
              <Button
                className="p-2 md:p-4 text-xs md:text-sm flex flex-col md:flex-row gap-1 md:gap-2 items-center rounded-small"
                color="default"
                size="sm"
                variant="light"
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
                size="sm"
                variant="light"
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
            <Button
              className="p-2 md:p-4 text-xs md:text-sm flex flex-col md:flex-row gap-1 md:gap-2 items-center rounded-small"
              color="default"
              size="sm"
              variant="light"
              onClick={() => {
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
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
