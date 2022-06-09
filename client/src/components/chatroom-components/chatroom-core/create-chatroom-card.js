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
import { useState } from "react";
import { FcRight } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

function CreateChatRoomCard() {
  const { colorMode } = useColorMode();
  const [room_name, set_room_name] = useState("");
  const [search_value_response, set_search_value_response] = useState([]);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");

  const box_bg_colors = useColorModeValue("#8CC0DE", "#827397");
  const modal_bg_colors = useColorModeValue("light.200", "dark.900");
  const text_colors = useColorModeValue("light.1000", "#fffffe");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");

  const [open_search_drawer, set_open_search_drawer] = useState(false);
  const [placement, setPlacement] = useState("right");

  async function handle_search_submit() {
    console.log(room_name);
    await axios
      .post(`/chat/` + room_name, {})
      .then((response) => console.log(response));
  }

  function handle_change(e) {
    set_room_name(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handle_search_submit();
    }
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
      overflow="hidden"
    >
      <Flex direction={"column"} mt={0}>
        <Box>
          <Heading
            align={"left"}
            fontSize="3xl"
            lineHeight={10}
            color={text_colors}
            textTransform={"uppercase"}
          >
            Create a new room
          </Heading>

          <Text align={"left"} fontSize="xl" color={text_colors}>
            {
              "No available room? Need to talk to someone specific? Create your own room."
            }
          </Text>
        </Box>

        <Box>
          <VStack align={"left"}>
            <Heading
              mt={2}
              fontWeight="bold"
              align={"left"}
              fontSize="2xl"
              color={text_colors}
              textTransform={"uppercase"}
            >
              Room Name
            </Heading>
            <HStack>
              <Input
                borderColor={input_border_color}
                border={"2px solid"}
                borderRadius={"md"}
                placeholder={""}
                size="lg"
                isRequired={true}
                variant={"outline"}
                fontFamily={"Inter"}
                fontWeight="bold"
                _placeholder={{ color: input_border_color }}
                _hover={{}}
                focusBorderColor="#f9bc60"
                value={room_name}
                onChange={handle_change}
                onKeyDown={handleKeyDown}
              />
              <IconButton
                border={"3px solid transparent"}
                aria-label="Search database"
                size={"lg"}
                icon={<FcRight />}
                bg={"light.100"}
                type={"submit"}
                onClick={handle_search_submit}
              />
            </HStack>
            <Box my={3} align={"center"}>
              <Image
                src={
                  colorMode === "dark"
                    ? "/media/dashboard/chatroom/create-chatroom-img.svg"
                    : "/media/dashboard/chatroom/create-chatroom-img.svg"
                }
                w={"60%"}
              ></Image>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CreateChatRoomCard;
