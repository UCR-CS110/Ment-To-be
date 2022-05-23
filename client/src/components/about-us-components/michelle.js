import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import AboutUsTemplateCard from "./about-us-template-card";
import AboutUsPreviewCard from "./about-us-preview-card";

export default function Michelle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <AboutUsPreviewCard
        name={"Michelle Chu"}
        name_url={"/media/about-us/michelle/michelle-name.svg"}
        avatar_url={"/media/about-us/xin/xin-preview.svg"}
        onClick={onOpen}
      >
        <Button onClick={onOpen}>Learn More</Button>
      </AboutUsPreviewCard>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={is_larger_than_md ? "md" : "full"}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="4px" />
        <ModalContent>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
