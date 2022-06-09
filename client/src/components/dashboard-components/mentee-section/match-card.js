import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import MatchResult from "./match-result";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function MatchCard({ mentee }) {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("#f9aa9d", "#c45544");
  const text_colors = useColorModeValue("light.1000", "#fff3ec");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  const btn_bg_colors = useColorModeValue("#e65e88", "#fffffe");
  const btn_text_colors = useColorModeValue("dark.900", "dark.900");

  const btn_hover_colors = useColorModeValue("#272343", "#e3f6f5");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const btn_border_colors = useColorModeValue("light.1000", "dark.100");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");
  const [auth, set_auth] = useState({});
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );
  const {
    isOpen: is_open,
    onOpen: on_open,
    onClose: on_close,
  } = useDisclosure();
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  const [mentor, setMentor] = useState({});
  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      set_auth(data);
      console.log(auth);
    });
  }, []);
  var email = auth.email
  function open_match_modal(){
    axios({
      method: "get",
      url: "/" + email + "/getMentor",
    }).then((response) => {
      axios({
        method: "get",
        url: "/" + response.data,
      }).then((response2) => {
        setMentor(response2.data);
      })
      
    })
    on_open()
  }
  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      w={is_larger_than_md ? "none" : "310px"}
      height={{ sm: "fit-content", md: "570px", lg: "570px" }}
      overflow={"hidden"}
    >
      <Flex direction={"column"}>
        <Box>
          <Heading
            align={"left"}
            fontSize="3xl"
            lineHeight={10}
            color={text_colors}
            textTransform={"uppercase"}
          >
            Queue for a match now
          </Heading>
        </Box>
        <Text align={"left"} fontSize="xl" color={text_colors}>
          {
            "After queueing - if we find a match, we will send you a notification."
          }
        </Text>
        <Stack mt={8} mb={2}>
          <Image
            backgroundColor="transparent"
            src={"/media/dashboard/match/match-img.svg"}
            width={"auto"}
            height={"auto"}
          ></Image>
        </Stack>

        <Box align={"center"} mt={5}>
          <Button
            variant="outline"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            h={{ base: "full", lg: "auto" }}
            position={"relative"}
            size="xs"
            cursor="pointer"
            border={"3px solid"}
            borderRadius={"6px"}
            borderColor={"transparent"}
            textTransform={"uppercase"}
            padding={"10px 18px "}
            transition={"all .2s ease"}
            transition-timing-function="spring(4 100 10 10)"
            _hover={{
              transform: "translateY(-3px)",
              shadow: "lg",
            }}
            boxShadow={"lg"}
            color={text_colors}
            bg={btn_bg_colors}
            onClick={open_match_modal}
          >
            <HStack>
              <Text
                fontWeight={"bold"}
                fontSize={"lg"}
                textTransform={"uppercase"}
                color={btn_text_colors}
              >
                {"Match"}
              </Text>
              <Icon
                as={BsFillSuitHeartFill}
                alignContent={"center"}
                boxSize={"18px"}
                color={btn_text_colors}
              />
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
                  Match found! 
                </Heading>
              </Box>
            </ModalHeader>
            <ModalBody pb={6}>
              <MatchResult matched={mentor}></MatchResult>
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
                  onClick={on_close}
                >
                  <Heading
                    fontWeight={"bold"}
                    size={"sm"}
                    textTransform={"uppercase"}
                  >
                    {"Contact"}
                  </Heading>
                </Button>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        </Box>
      </Flex>
    </Flex>
  );
}

export default MatchCard;
