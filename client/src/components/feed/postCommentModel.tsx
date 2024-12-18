import { IComment } from "@/types/types";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { User } from "@nextui-org/user";
import React from "react";
import { FaCommentAlt, FaRegHeart } from "react-icons/fa";

const PostCommentModel: React.FC<{
  comments: IComment[] | undefined;
}> = ({ comments }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  if (!comments) return null;

  return (
    <>
      <Button
        className="px-2 md:text-medium text-xs flex-col md:flex-row rounded-small"
        color="default"
        size="sm"
        variant="light"
        onPress={onOpen}
      >
        <span>
          <FaCommentAlt />
        </span>
        {comments.length} Comments
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        shouldBlockScroll
        className="flex max-h-[70vh] flex-col gap-1"
      >
        <ModalContent className="flex flex-col">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-xl">Comments</h1>
              </ModalHeader>
              <ModalBody className="flex-grow overflow-auto flex flex-col gap-4 ">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-b-1 border-default-300 pb-1"
                  >
                    <div className="flex gap-2">
                      <User
                        avatarProps={{
                          src: comment.author.avatar,
                        }}
                        description={comment.author.id}
                        name={comment.author.name}
                      />
                    </div>
                    <div className="flex gap-2 items-center justify-between">
                      <span className="text-sm text-default-600">
                        {comment.content}
                      </span>
                      <span className="text-xs flex flex-col items-center justify-center gap-2">
                        <FaRegHeart /> {comment.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter className="w-full flex justify-center">
                <div className="flex w-full items-center ">
                  <Input
                    className="p-2 rounded-small flex-grow"
                    placeholder="Write a comment..."
                  />
                  <Button
                    className="w-32 py-5 px-2 md:text-medium text-xs rounded-small"
                    color="primary"
                    size="sm"
                    variant="solid"
                    onClick={onClose}
                  >
                    Post
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostCommentModel;
