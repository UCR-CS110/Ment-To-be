import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  VStack,
  Center,
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useState} from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import ReviewForm from "./review-form";

function ReviewCore({ mentee }) {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.900", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  const back_btn_hover = useColorModeValue("light.400", "dark.300");

  const {
    isOpen: is_open,
    onOpen: on_open,
    onClose: on_close,
  } = useDisclosure();
  const {
    isOpen: is_delete_open,
    onOpen: on_delete_open,
    onClose: on_delete_close,
  } = useDisclosure();
  const cancelRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      height={{ sm: "fit-content", md: "fit-content", lg: "lg" }}
    >
      <VStack>
        <Box>
          <Heading fontSize="2xl" my={1} lineHeight={10} color={text_colors}>
            How was your experience with your mentor?
          </Heading>
        </Box>
        <Button
          my={5}
          variant="outline"
          alignItems="center"
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
          _hover={{ bg: btn_bg_colors }}
          boxShadow={"lg"}
          color={text_colors}
          onClick={on_open}
        >
          <HStack>
            <Icon as={FaRegHandPointRight} boxSize={"25px"} />
            <Heading
              fontWeight={"bold"}
              size={"sm"}
              textTransform={"uppercase"}
            >
              {"provide feedback"}
            </Heading>
          </HStack>
        </Button>

        <Modal
          motionPreset={"scale"}
          scrollBehavior={"inside"}
          isOpen={is_open}
          onClose={on_close}
          size={isLargerThan770 ? "3xl" : "full"}
          closeOnOverlayClick={false}
          isCentered={true}
          finalFocusRef={finalRef}
          
        >
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>
              <Box align={"center"}>
                {/* <Heading fontSize={isLargerThan770 ? "4xl" : "2xl"} mt={5}>
                  Feedback for {Name}
                </Heading> */}
              </Box>
            </ModalHeader>

            <ModalBody pb={6}>
              <ReviewForm></ReviewForm>
              <Box align={"center"} mb={5}>
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
                    {"Back!"}
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
                      <AlertDialogHeader  fontWeight="bold">
                        <Heading fontSize="xl">Remove profile</Heading>
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button variant={"outline"} ref={cancelRef} onClick={on_delete_close}>
                          Cancel
                        </Button>
                        <Button colorScheme="red" ref={finalRef} onClick={on_delete_close && on_close}  ml={5}>
                          Back
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>






        <Box>
          <Image
            mt={10}
            p={-3}
            backgroundColor="transparent"
            src={"/media/dashboard/review/review-img.png"}
            w={"260px"}
          ></Image>
        </Box>
        <Box></Box>
      </VStack>
    </Flex>
  );
}

export default ReviewCore;
