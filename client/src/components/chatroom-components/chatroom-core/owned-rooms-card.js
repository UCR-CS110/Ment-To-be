import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
  Wrap,
  Spinner,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, FC, ChangeEvent } from "react";
import { HiRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function OwnedRoomsTemplate({ name, id, pic }) {
  const navigate = useNavigate();
  const btn_bg_colors = useColorModeValue("light.100", "dark.100");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const text_colors = useColorModeValue("light.1000", "dark.900");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("#fec0ce", "#acb0bd");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");

  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  return (
    <VStack mb={2}>
      <Flex
        as="button"
        align={"center"}
        border={"2px transparent"}
        justify={"center"}
        borderRadius={"md"}
        transition={"all .2s ease"}
        transition-timing-function="spring(4 100 10 10)"
        _hover={{
          transform: "translateY(-3px)",
          borderColor: "transparent",
        }}
        onClick={() => navigate("/chat/" + id)}
      >
        <Box
          w={{ xs: "auto", md: "325px" }}
          h={{ xs: "auto", md: "140px" }}
          boxShadow={"sm"}
          borderRadius={"sm"}
          bg={box_bg_colors}
        >
          <Flex direction={"row"} p={5} align={"center"}>
            <Image
              backgroundColor="transparent"
              src={pic}
              clipPath={"circle()"}
              position={"relative"}
              w={"25%"}
              h={"25%"}
            ></Image>
            <Flex direction={"column"} align={"left"} mx={3}>
              <Box my={1}>
                <Heading
                  align={"left"}
                  fontSize={"md"}
                  w="full"
                  fontWeight="bold"
                  textTransform={"uppercase"}
                  color={text_colors}
                >
                  ROOM NAME
                </Heading>
                <Text color={text_colors} align={"left"} fontSize={"md"}>
                  {name}
                </Text>
              </Box>
              <Box my={1}>
                <Heading
                  align={"left"}
                  fontSize={"md"}
                  w="full"
                  fontWeight="bold"
                  textTransform={"uppercase"}
                  color={text_colors}
                >
                  ID
                </Heading>
                <Text color={text_colors} align={"left"} fontSize={"md"}>
                  {id}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}

function OwnedRoomsCard({ user, rooms }) {
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  const btn_hover_colors = useColorModeValue("light.400", "dark.300");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const { colorMode } = useColorMode();
  const [room_name, set_room_name] = useState("");
  const [search_value_response, set_search_value_response] = useState([]);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");

  const box_bg_colors = useColorModeValue("#ff928b", "#0b3948");
  const modal_bg_colors = useColorModeValue("light.200", "dark.900");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      w={is_larger_than_md ? "none" : "310px"}
      height={{ sm: "350px", md: "570px", lg: "570px" }}
      overflowY={"scroll"}
      overflowX={"hidden"}
    >
      <Flex direction={"column"} mt={0}>
        <HStack>
          <Box mb={4}>
            <Heading
              align={"left"}
              fontSize="3xl"
              lineHeight={10}
              color={text_colors}
              textTransform={"uppercase"}
            >
              Your rooms
            </Heading>
          </Box>
        </HStack>

        <Box>
          <VStack>
            {rooms.length === 0 && (
              <Text fontSize={"xl"}>
                You haven't created any rooms yet! Feel free to create one or
                join from the ones below.
              </Text>
            )}
            {rooms &&
              rooms?.map((r) => (
                <Box key={r.room_id}>
                  <OwnedRoomsTemplate
                    name={r.name}
                    id={r.room_id}
                    pic={r.pic}
                  ></OwnedRoomsTemplate>
                </Box>
              ))}
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OwnedRoomsCard;
