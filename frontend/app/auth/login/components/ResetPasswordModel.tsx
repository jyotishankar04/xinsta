"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
const ResetPasswordModel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button size="sm" variant="light" onClick={onOpen}>
        Reset Password
      </Button>
      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        size="md"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalBody>
            <h1>A reset password link will be sent to your email</h1>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onOpenChange}>
              Reset Password
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ResetPasswordModel;
