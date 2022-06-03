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
import React, { useState } from "react";
import MenteeSignUpForm from "./mentee-signup-form";

function MenteeSignUpContainer({ finalFocusRef }) {
  const back_btn_hover = useColorModeValue("light.400", "dark.300");
  const {
    isOpen: is_mentee_open,
    onOpen: on_mentee_open,
    onClose: on_mentee_close,
  } = useDisclosure();
  const {
    isOpen: is_delete_open,
    onOpen: on_delete_open,
    onClose: on_delete_close,
  } = useDisclosure();
  const cancelRef = React.useRef();
  const finalRef = React.useRef();

  const btn_colors = useColorModeValue("light.300", "dark.100");
  const btn_text_colors = useColorModeValue("light.900", "dark.100");
  const btn_hover_colors = useColorModeValue("light.400", "dark.100");
  const box_bg_colors = useColorModeValue("light.100", "#0e172c");
  const text_colors = useColorModeValue("light.100", "light.1000");
  const btn_bg_colors = useColorModeValue("light.1000", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  return (
    <Flex>
      <Button
        my={5}
        variant="outline"
        alignItems="center"
        justifyContent="center"
        w={{ base: "full", sm: "auto" }}
        size={isLargerThan770 ? "lg" : "md"}
        cursor="pointer"
        textTransform={"uppercase"}
        padding={"16px 36px "}
        transition={"all .5s ease"}
        _hover={{ bg: btn_hover_colors }}
        boxShadow={"md"}
        onClick={on_mentee_open}
        border={"none"}
        bg={btn_bg_colors}
        color={text_colors}
      >
        Create a Mentee Profile
      </Button>

      <Modal
        motionPreset={"scale"}
        scrollBehavior={"inside"}
        isOpen={is_mentee_open}
        size={isLargerThan770 ? "3xl" : "full"}
        closeOnOverlayClick={false}
        isCentered={true}
        finalFocusRef={finalFocusRef}
        closeOnEsc={false}
        onClose={on_mentee_close}
      >
        <ModalOverlay />

        <ModalContent bg={box_bg_colors}>
          <ModalCloseButton></ModalCloseButton>
          <ModalHeader>
            <Box align={"left"} p={5}>
              <Heading fontSize={isLargerThan770 ? "4xl" : "3xl"} my={3}>
                Creating your mentee profile
              </Heading>
              <Text
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                all fields are required!
              </Text>
            </Box>
          </ModalHeader>
          <ModalBody pt={-2} pb={3}>
            <MenteeSignUpForm></MenteeSignUpForm>
            {/* <Box align={"center"} mb={5}>
              <Button
                variant="outline"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                cursor="pointer"
                border={"3px solid"}
                borderRadius={"6px"}
                borderColor={btn_border_colors}
                textTransform={"uppercase"}
                padding={"16px 36px "}
                transition={"all .5s ease"}
                _hover={{ bg: back_btn_hover }}
                boxShadow={"sm"}
                onClick={on_delete_open}
              >
                <Heading
                  fontWeight={"bold"}
                  size={"sm"}
                  textTransform={"uppercase"}
                >
                  {"I'm not ready yet - take me back!"}
                </Heading>
              </Button>

              <AlertDialog
                isOpen={is_delete_open}
                leastDestructiveRef={cancelRef}
                onClose={on_delete_close}
                isCentered={true}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontWeight="bold">
                      <Heading fontSize="xl">Remove profile</Heading>
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button
                        variant={"outline"}
                        ref={cancelRef}
                        onClose={on_delete_close}
                      >
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={on_mentee_close}

                        ml={5}
                      >
                        Remove
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Box> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
export default MenteeSignUpContainer;
