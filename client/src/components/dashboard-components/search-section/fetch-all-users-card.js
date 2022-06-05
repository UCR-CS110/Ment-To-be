import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Image,
  useColorModeValue,
  VStack,
  Input,
  Link,
  useMediaQuery,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { ImEarth } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
function FetchAllUsersCard() {
  const [search_value, set_search_value] = useState("");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  let navigate = useNavigate();
  const box_bg_colors = useColorModeValue("#e3f6f5", "#272343");
  const text_colors = useColorModeValue("light.1000", "#fffffe");
  const btn_hover_colors = useColorModeValue("#272343", "#e3f6f5");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");
  const btn_border_colors = useColorModeValue("light.1000", "dark.100");
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );

  function handle_search_submit() {
    axios({
      method: "get",
      url: "/getUsers",
    }).then((response) => {
      console.log(response);
    });
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
      <Flex direction={"column"} mt={0}>
        <Box>
          <Heading
            fontSize="3xl"
            lineHeight={10}
            color={text_colors}
            textTransform={"uppercase"}
          >
            View all members in our community
          </Heading>
        </Box>
        <Stack>
          <Box align={"center"} my={3}>
            <Link rounded={"md"} as={RouterLink} to={"/browse"} _hover={"none"}>
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
                borderColor={btn_border_colors}
                textTransform={"uppercase"}
                padding={"10px 18px "}
                transition={"all .2s ease"}
                transition-timing-function="spring(4 100 10 10)"
                _hover={{
                  transform: "translateY(-3px)",
                  shadow: "lg",
                  bg: btn_hover_colors,
                  color: btn_hover_colors_text,
                  borderColor: "transparent",
                }}
                boxShadow={"lg"}
                color={text_colors}
              >
                <HStack>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"lg"}
                    textTransform={"uppercase"}
                  >
                    {"Browse"}
                  </Text>
                  <Icon as={ImEarth} boxSize={"25px"} />
                </HStack>
              </Button>
            </Link>
          </Box>

          <Image
            backgroundColor="transparent"
            src={"/media/dashboard/search/fetch-all-img.svg"}
            w={"100%"}
            h={"100%"}
          ></Image>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default FetchAllUsersCard;
