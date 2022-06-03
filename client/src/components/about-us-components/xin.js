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

export default function Xin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <AboutUsPreviewCard
        name={"Xin Wang"}
        name_url={"/media/about-us/xin/xin-name.svg"}
        avatar_url={"/media/about-us/xin/xin-preview.svg"}
        onClick={onOpen}
      >

      </AboutUsPreviewCard>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={is_larger_than_md ? "xl" : "full"}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="4px" />
        <ModalContent>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <AboutUsTemplateCard
              first_name={"Xin"}
              last_name={"Wang"}
              desc={
                "Hi! I'm Xin (pronounced like “Shin”) - I love to build great things with great people while having a great time. I enjoy learning, expanding my arsenal of toolsets, and using my knowledge and capabilities to aid and impact others!"
              }
              pfp_link={"/media/about-us/xin/xin.jpg"}
              email={"xinwng3@gmail.com"}
              gh_link={"http://github.com/xinwng"}
              linkedin_link={"http://linkedin.com/in/xinwng"}
            ></AboutUsTemplateCard>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
