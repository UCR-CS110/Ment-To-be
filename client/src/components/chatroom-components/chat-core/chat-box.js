import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Divider,
  Image,
  Stack,
  Link,
  Textarea,
  Text,
  useColorModeValue,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

function ChatBox() {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("light.100", "dark.800");
  const text_colors = useColorModeValue("light.1000", "#fff3ec");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  const btn_bg_colors = useColorModeValue("#f9bc60", "#fffffe");
  const btn_text_colors = useColorModeValue("dark.900", "dark.900");

  const btn_hover_colors = useColorModeValue("#272343", "#e3f6f5");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const btn_border_colors = useColorModeValue("light.1000", "dark.100");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"5xl"}
      w={{
        base: "fit-content",
        sm: "fit-content",

        lg: "5xl",
      }}
      h={{ sm: "fit-content", lg: "750px" }}
      overflow={"hidden"}
    >
      <Divider orientation={"vertical"} mr={5}></Divider>
      <Flex direction={"column"} mt={0}>
        <Stack mt={8} mb={2}>
          <HStack>
            <Textarea placeholder="" size="lg" resize={"Vertical"} />
            <Link rounded={"md"}>
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
                padding={"7px 5px "}
                transition={"all .2s ease"}
                transition-timing-function="spring(4 100 10 10)"
                _hover={{
                  transform: "translateY(-3px)",
                  shadow: "lg",
                }}
                boxShadow={"sm"}
                color={text_colors}
                bg={btn_bg_colors}
                mx={3}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  textTransform={"uppercase"}
                  color={btn_text_colors}
                >
                  {"Send"}
                </Text>
              </Button>
            </Link>
          </HStack>
        </Stack>

        <Box align={"center"}></Box>
      </Flex>
    </Flex>
  );
}

export default ChatBox;
