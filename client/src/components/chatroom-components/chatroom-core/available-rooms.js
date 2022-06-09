import {
  Tag,
  Box,
  Button,
  Link,
  Stack,
  Image,
  HStack,
  SimpleGrid,
  Wrap,
  WrapItem,
  useColorModeValue,
  Flex,
  useMediaQuery,
  IconButton,
  Text,
  VStack,
  Center,
  Heading,
  Icon,
  Tooltip,
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect, FC, ChangeEvent } from "react";
import { HiRefresh } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RoomCardTemplate({ name, id, pic }) {
  const navigate = useNavigate();
  const btn_bg_colors = useColorModeValue("light.400", "dark.100");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const text_colors = useColorModeValue("light.100", "dark.900");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("light.100", "dark.800");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");

  return (
    <Flex
      bg={box_bg_colors}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={"275px"}
      py={5}
      height={{ sm: "fit-content", lg: "370px" }}
      align={"center"}
      justify={"center"}
    >
      <Flex direction={"column"}>
        <Box>
          <Flex direction={"column"}>
            <Box align={"center"} justify={"center"} my={2}>
              <Image
                backgroundColor="transparent"
                src={pic}
                clipPath={"circle()"}
                position={"relative"}
                w={"40%"}
                h={"40%"}
              ></Image>
            </Box>
            <Box my={1} align={"center"} justify={"center"}>
              <Heading
                fontSize={"xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                verticalAlign="middle"
              >
                ROOM NAME
              </Heading>
              <Text fontSize={"lg"}>{name}</Text>
            </Box>
            <Box my={2} align={"center"} justify={"center"}>
              <Heading
                fontSize={"xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                verticalAlign="middle"
              >
                ID
              </Heading>
              <Text fontSize={"lg"}>{id}</Text>
            </Box>
            <Box align={"center"}>
              <Button
                variant="outline"
                alignItems="center"
                position={"relative"}
                size="xs"
                cursor="pointer"
                bg={btn_bg_colors}
                borderRadius={"6px"}
                borderColor={"transparent"}
                textTransform={"uppercase"}
                padding={"17px 15px "}
                transition={"all .2s ease"}
                transition-timing-function="spring(4 100 10 10)"
                _hover={{
                  transform: "translateY(-3px)",
                  shadow: "lg",
                  bg: btn_hover_colors,
                  color: btn_hover_colors_text,
                  borderColor: "transparent",
                }}
                boxShadow={"sm"}
                color={text_colors}
                my={2}
                onClick={() => navigate("/chat/" + id)}
              >
                <HStack>
                  <Text fontSize={"sm"} textTransform={"uppercase"}>
                    {"Join"}
                  </Text>
                </HStack>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

function AvailableRooms() {
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("light.100", "dark.800");
  const btn_bg_colors = useColorModeValue("light.1000", "dark.100");
  const btn_hover_colors = useColorModeValue("light.100", "dark.900");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const [rooms, set_rooms] = useState([]);
  const input_border_color = useColorModeValue("light.1000", "#fffffe");
  const [search_string, set_search_string] = useState("");
  const [filtered_rooms, set_filtered_rooms] = useState([]);

  function filter_by_value(array, string) {
    return array.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(string.toLowerCase())
      )
    );
  }

  function handle_change(e) {
    console.log(search_string);
    set_search_string(e.target.value);

    set_filtered_rooms(filter_by_value(rooms, search_string));
    console.log("fr", filtered_rooms);
  }

  useEffect(() => {
    fetch_rooms();
  }, []);

  function fetch_rooms() {
    axios.get("/chat/available_rooms").then(({ data }) => {
      console.log("fetching rooms", data);
      set_rooms(data);
      console.log(rooms);
    });
  }

  return (
    <Stack>
      <Box>
        <Heading mx={3} mt={3} fontSize={"4xl"}>
          Available rooms
        </Heading>
      </Box>

      <Box px={3} align={is_larger_than_md ? "left" : "center"}>
        <Input
          my={1}
          borderColor={input_border_color}
          border={"3px solid"}
          borderRadius={"md"}
          placeholder={"Search by Room Name or ID"}
          maxW={"md"}
          size="lg"
          isRequired={true}
          variant={"outline"}
          fontFamily={"Inter"}
          fontWeight="bold"
          _placeholder={{ color: input_border_color }}
          _hover={{}}
          focusBorderColor="#f9bc60"
          value={search_string}
          onChange={handle_change}
        />
        <IconButton
          mx={5}
          mt={is_larger_than_md ? -2 : 3}
          variant="outline"
          size="lg"
          cursor="pointer"
          border={"3px solid "}
          textTransform={"uppercase"}
          padding={"4px 4px "}
          transition={"all .2s ease"}
          transition-timing-function="spring(4 100 10 10)"
          _hover={{
            transform: "translateY(-3px)",
            shadow: "lg",
            bg: btn_bg_colors,
            color: btn_hover_colors,
            borderColor: "transparent",
          }}
          clipPath={"circle()"}
          borderRadius={"full"}
          boxShadow={"md"}
          color={btn_bg_colors}
          borderColor={btn_bg_colors}
          bg={"transparent"}
          as={HiRefresh}
          onClick={fetch_rooms}
        ></IconButton>
      </Box>

      <Box>
        <Wrap
          mt={3}
          mx={3}
          spacing={"30px"}
          justify={is_larger_than_md ? "left" : "center"}
        >
          {search_string.length > 0 &&
            filtered_rooms &&
            filtered_rooms.map((r) => (
              <WrapItem key={r.room_id}>
                <RoomCardTemplate
                  name={r.name}
                  id={r.room_id}
                  pic={r.pic}
                ></RoomCardTemplate>
              </WrapItem>
            ))}

          {search_string.length === 0 &&
            rooms &&
            rooms.map((r) => (
              <WrapItem key={r.room_id}>
                <RoomCardTemplate
                  name={r.name}
                  id={r.room_id}
                  pic={r.pic}
                ></RoomCardTemplate>
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </Stack>
  );
}

export default AvailableRooms;
