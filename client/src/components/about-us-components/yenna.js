import {
  Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import AboutUsPreviewCard from "./about-us-preview-card";
import AboutUsTemplateCard from "./about-us-template-card";

export default function Yenna() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <AboutUsPreviewCard
        name={"Yenna Chang"}
        name_url={"/media/about-us/yenna/yenna-name.svg"}
        avatar_url={"/media/about-us/yenna/yenna-preview.svg"}
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
              first_name={"Yenna"}
              last_name={"Chang"}
              desc={
                "Nice to meet you, I'm Yenna! I've always been the kind of person who is passionate about making creative ideas come to life and have found a love for building projects with my friends and colleagues."
              }
              pfp_link={"/media/about-us/yenna/yenna.jpg"}
              gh_link={"https://github.com/changyenna"}
              linkedin_link={"https://www.linkedin.com/in/yenna-chang/"}
            // add email
            ></AboutUsTemplateCard>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
