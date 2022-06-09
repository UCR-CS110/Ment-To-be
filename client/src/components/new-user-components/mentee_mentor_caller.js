import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, {  useState } from "react";

import MenteeSignUpContainer from "./mentee_signup_container";
import MentorSignUpContainer from "./mentor_signup_container";

function NewUserSignUp_Mentee_Mentor_Caller({ mentee, mentor }) {
  const btn_colors = useColorModeValue("light.300", "dark.100");
  const btn_text_colors = useColorModeValue("light.900", "dark.100");
  const btn_hover_colors = useColorModeValue("light.400", "dark.100");

  const text_colors = useColorModeValue("light.100", "light.1000");
  const btn_bg_colors = useColorModeValue("light.1000", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  const back_btn_hover = useColorModeValue("light.400", "dark.300");
  const {
    isOpen: is_mentee_open,
    onOpen: on_mentee_open,
    onClose: on_mentee_close,
  } = useDisclosure();
  const {
    isOpen: is_mentor_open,
    onOpen: on_mentor_open,
    onClose: on_mentor_close,
  } = useDisclosure();
  const {
    isOpen: is_delete_open,
    onOpen: on_delete_open,
    onClose: on_delete_close,
  } = useDisclosure();
  const cancelRef = React.useRef();
  const finalRef = React.useRef();

  if (mentee === true) {
    return (
      <MenteeSignUpContainer finalFocusRef={finalRef}></MenteeSignUpContainer>
    );
  } else if (mentor === true) {
    return ( 
      <MentorSignUpContainer finalFocusRef={finalRef}></MentorSignUpContainer>
    );
  }
}

export default NewUserSignUp_Mentee_Mentor_Caller;
