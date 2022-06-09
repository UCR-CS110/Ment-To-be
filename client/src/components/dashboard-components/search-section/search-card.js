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
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

function ResultTemplate({
  mentee_profile_exists,
  mentor_profile_exists,
  full_name,
  pfp,
  email,
}) {
  const btn_bg_colors = useColorModeValue("light.400", "dark.100");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("light.100", "dark.800");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");

  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");

  return (
    <Flex
      p={10}
      bg={box_bg_colors}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={"300px"}
      height={{ sm: "fit-content", lg: "375px" }}
      align={"center"}
      justify={"center"}
    >
      <Flex direction={"column"}>
        <Box>
          <Stack direction={is_larger_than_md ? "row" : "column"}>
            <VStack>
              <Heading
                align={"center"}
                fontSize={"2xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                verticalAlign="middle"
                mb={2}
              >
                {full_name}
              </Heading>

              <HStack>
                <Box>
                  {mentee_profile_exists && (
                    <Tag size={"lg"} borderRadius={"full"} colorScheme={"red"}>
                      Mentee
                    </Tag>
                  )}
                </Box>
                <Box mx={3}>
                  {mentor_profile_exists && (
                    <Tag
                      size={"lg"}
                      borderRadius={"full"}
                      colorScheme={"green"}
                    >
                      Mentor
                    </Tag>
                  )}
                </Box>
              </HStack>

              <Box>
                <Image
                  my={5}
                  justify={"center"}
                  backgroundColor="transparent"
                  src={pfp}
                  clipPath={"circle()"}
                  w={"100px"}
                ></Image>
              </Box>

              <Box align={"center"} my={3}>
                <Link
                  rounded={"md"}
                  href={"mailto:" + email}
                  target={"_blank"}
                  _hover={"none"}
                >
                  <Button
                    variant="outline"
                    alignItems="center"
                    w={{ base: "full", sm: "auto" }}
                    h={{ base: "full", lg: "auto" }}
                    position={"relative"}
                    size="xs"
                    cursor="pointer"
                    border={"2px solid"}
                    borderRadius={"6px"}
                    borderColor={btn_border_colors}
                    textTransform={"uppercase"}
                    padding={"7px 13px "}
                    transition={"all .2s ease"}
                    transition-timing-function="spring(4 100 10 10)"
                    _hover={{
                      transform: "translateY(-3px)",
                      shadow: "lg",
                      bg: btn_hover_colors,
                      color: btn_hover_colors_text,
                      borderColor: "transparent",
                    }}
                    boxShadow={"md"}
                    color={text_colors}
                  >
                    <HStack>
                      <Text fontSize={"sm"} textTransform={"uppercase"}>
                        {"Message"}
                      </Text>
                      <Icon as={MdEmail} boxSize={"22px"} />
                    </HStack>
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

function SearchCard() {
  const [search_string, set_search_string] = useState("");
  const [search_value_response, set_search_value_response] = useState([]);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");

  const box_bg_colors = useColorModeValue("#abd1c6", "#004643");
  const modal_bg_colors = useColorModeValue("light.200", "dark.900");
  const text_colors = useColorModeValue("light.1000", "#fffffe");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");

  const [open_search_drawer, set_open_search_drawer] = useState(false);
  const [placement, setPlacement] = useState("right");

  async function handle_search_submit() {
    const { data } = await axios.get(`/search/` + search_string, {});

    if (data) {
      set_search_value_response(data);
      console.log(data, search_value_response);
    }
    set_open_search_drawer(true);
  }

  function handle_change(e) {
    set_search_string(e.target.value);
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
            fontSize="3xl"
            lineHeight={10}
            color={text_colors}
            textTransform={"uppercase"}
          >
            Looking for someone specific?
          </Heading>
        </Box>
        <Box my={5}>
          <HStack>
            <Input
              borderColor={input_border_color}
              border={"3px solid"}
              borderRadius={"md"}
              placeholder={"Search..."}
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
              onKeyDown={handleKeyDown}
            />
            <IconButton
              border={"3px solid transparent"}
              aria-label="Search database"
              size={"lg"}
              icon={<FcSearch />}
              bg={"light.100"}
              type={"submit"}
              onClick={handle_search_submit}
            />
          </HStack>
        </Box>
        <Box justifyContent="center">
          <Image
            align={"center"}
            justify={"center"}
            backgroundColor="transparent"
            src={"/media/dashboard/search/search-img.svg"}
            position={"relative"}
            w={"400px"}
          ></Image>
        </Box>
      </Flex>
      <Box>
        <Drawer
          placement={placement}
          isOpen={open_search_drawer}
          onClose={() => set_open_search_drawer(false)}
          size={is_larger_than_md ? "md" : "md"}
          motionPreset="slideInBottom"
        >
          <DrawerOverlay>
            <DrawerContent bg={modal_bg_colors}>
              <DrawerCloseButton></DrawerCloseButton>
              <DrawerHeader>
                <Heading p={3}>Results</Heading>
              </DrawerHeader>
              <DrawerBody mb={10}>
                <HStack mb={3} p={3} mt={-5}>
                  <Input
                    borderColor={input_border_color}
                    border={"3px solid"}
                    borderRadius={"md"}
                    placeholder={"Search..."}
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
                    onKeyDown={handleKeyDown}
                  />
                  <IconButton
                    border={"3px solid transparent"}
                    aria-label="Search database"
                    size={"lg"}
                    icon={<FcSearch />}
                    bg={"light.100"}
                    type={"submit"}
                    onClick={handle_search_submit}
                  />
                </HStack>

                <Wrap spacing={"30px"} justify={"center"} mt={5}>
                  {search_value_response &&
                    search_value_response.map((p) => (
                      <WrapItem key={p._id}>
                        <ResultTemplate
                          mentee_profile_exists={p.mentee_profile_exists}
                          mentor_profile_exists={p.mentor_profile_exists}
                          full_name={p.full_name}
                          email={p.email}
                          pfp={p.picture}
                        ></ResultTemplate>
                      </WrapItem>
                    ))}
                  {search_value_response.length === 0 && (
                    <Center p={3}>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        We found nothing related to your search 😔
                      </Text>
                    </Center>
                  )}
                </Wrap>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
}

export default SearchCard;
