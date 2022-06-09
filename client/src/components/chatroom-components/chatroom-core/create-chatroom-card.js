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
  Tooltip,
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
import { GrLinkNext } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

function CreateChatRoomCard() {
  const { colorMode } = useColorMode();
  const [room_name, set_room_name] = useState("");
  const [search_value_response, set_search_value_response] = useState([]);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");

  const box_bg_colors = useColorModeValue("#8CC0DE", "#16425b");
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
              "All the rooms taken? Want to talk to your close peers? Create your own room."
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
              <Tooltip
                w={"100%"}
                hasArrow
                placement={"bottom-start"}
                label="Required"
              >
                <Input
                  borderColor={input_border_color}
                  border={"3px solid"}
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
              </Tooltip>
              <IconButton
                border={"3px solid transparent"}
                aria-label="Search database"
                size={"lg"}
                as={GrLinkNext}
                p={"8px 8px"}
                bg={"dark.100"}
                type={"submit"}
                cursor="pointer"
                onClick={handle_search_submit}
              />
            </HStack>
            <Box align={"center"}>
              <Image
                mt={4}
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
