import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import ReviewForm from "./review-form";

function ReviewCore({ mentee }) {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.900", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  const on_delete_ref = useRef(null);
  const {
    isOpen: is_open,
    onOpen: on_open,
    onClose: on_close,
  } = useDisclosure();

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      height={{ sm: "fit-content", lg: "570px" }}
      ref={on_delete_ref}
    >
      <VStack>
        <Box>
          <Heading fontSize="2xl" my={3} lineHeight={10} color={text_colors}>
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
              {"Provide feedback"}
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
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton></ModalCloseButton>
              <Box align={"center"}>
                <Heading fontSize={isLargerThan770 ? "4xl" : "2xl"} mt={5}>
                  {/* change Xin to {name} */}
                  Provide Endorsements for Xin
                </Heading>
              </Box>
            </ModalHeader>
            <ModalBody pb={6}>
              <ReviewForm></ReviewForm>
              <Center>
                <Button
                  my={3}
                  variant="outline"
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
                  boxShadow={"sm"}
                  color={text_colors}
                  type={"submit"}
                  // need to change onclick to submit form
                  onClick={on_close}
                >
                  <Heading
                    fontWeight={"bold"}
                    size={"sm"}
                    textTransform={"uppercase"}
                  >
                    {"submit response"}
                  </Heading>
                </Button>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box>
          <Image
            mb={-10}
            backgroundColor="transparent"
            src={"/media/dashboard/review/review-img.png"}
            w={{ xs: "100vh", md: "25vh" }}
          ></Image>
        </Box>
      </VStack>
    </Flex>
  );
}

export default ReviewCore;
