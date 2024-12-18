import { IPost } from "@/types/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import {
  FaBookmark,
  FaCommentAlt,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import PostImageComp from "./postImageComp";
import PostCommentModel from "./postCommentModel";

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  return (
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
      <CardBody className="">
        <p className="text-default-400 text-small md:text-medium">
          {post.description}
        </p>
        <div className="mt-3 relative max-h-[60vh] xl:h-[60vh] h-[40vh]  rounded-small ">
          <PostImageComp images={post.image} />
        </div>
      </CardBody>

      <CardFooter className="flex justify-between">
        <div className="flex md:gap-2 gap-1">
          <Button
            className="p-2 md:p-4 text-xs md:text-sm flex flex-col md:flex-row gap-1 md:gap-2 items-center rounded-small"
            color="default"
            size="sm"
            variant="light"
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
          {<PostCommentModel comments={post.commentsData} />}
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
  );
};

export default PostCard;
