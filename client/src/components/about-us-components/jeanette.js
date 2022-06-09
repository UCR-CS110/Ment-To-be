import {
  Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import AboutUsPreviewCard from "./about-us-preview-card";
import AboutUsTemplateCard from "./about-us-template-card";

export default function Jeanette() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <AboutUsPreviewCard
        name={"Jeanette Oh"}
        name_url={"/media/about-us/jeanette/jeanette-name.svg"}
        avatar_url={"/media/about-us/jeanette/jeanette-preview.svg"}
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
              first_name={"Jeanette"}
              last_name={"Oh"}
              desc={
                "Hey you, I'm Jeanette! I like to say that I'm a creative and intuitive gal that is up for any adventure or challenge. I love to brainstorm ways to bring ideas/concepts into reality alongside friends and those around me!"
              }
              pfp_link={"/media/about-us/jeanette/jeanette.jpg"}
              email={"jeanette.e.oh@gmail.com"}
              gh_link={"https://github.com/jeanetteoh"}
              linkedin_link={"https://www.linkedin.com/in/jeanetteoh/"}
            ></AboutUsTemplateCard>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

