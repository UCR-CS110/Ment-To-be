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
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

function SearchCard() {
  const [search_value, set_search_value] = useState("");
  const [search_value_response, set_search_value_response] = useState([]);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");

  const box_bg_colors = useColorModeValue("#abd1c6", "#004643");
  const text_colors = useColorModeValue("light.1000", "#fffffe");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");
  const btn_border_colors = useColorModeValue("light.1000", "dark.900");
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );

  function handle_search_submit(e) {
    axios.get(`/search/` + search_value, {}).then((response) => {
      set_search_value_response(response);
    });
    console.log(search_value_response);
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handle_search_submit();
            }}
          >
            <HStack>
              <Input
                borderColor={input_border_color}
                border={"2px solid"}
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
                value={search_value}
                onChange={(e) => set_search_value(e.currentTarget.value)}
              />
              <IconButton
                border={"3px solid transparent"}
                aria-label="Search database"
                size={"lg"}
                icon={<FcSearch />}
                bg={"light.100"}
                type={"submit"}
              />
            </HStack>
          </form>
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
        <Box align={"center"} mt={7}></Box>
      </Flex>
    </Flex>
  );
}

export default SearchCard;
