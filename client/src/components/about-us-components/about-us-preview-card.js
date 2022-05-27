import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

function AboutUsPreviewCard({ name, name_url, avatar_url, onClick, ...rest }) {
  const box_bg_colors = useColorModeValue("light.100", "dark.200");
  const box_header_colors = useColorModeValue("light.900", "dark.800");
  const text_colors = useColorModeValue("light.900", "dark.900");

  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.900");

  return (
    <Box
      bg={box_bg_colors}
      p={9}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={{ xs: "fit-content" }}
      h={{ xs: "fit-content", lg: "625px" }}
    >
      <Flex direction={"column"}>
        <Box justifyContent={"center"} align={"center"}>
          <Center>
            {/* <Heading fontWeight={"bold"} fontSize="2.3rem" color={text_colors}>
              {name}
            </Heading> */}
            <Image
              src={name_url}
              alt={name}
              m={-10}
              px={3}
              maxWidth={"350px"}
            ></Image>
          </Center>
        </Box>
        <Box>
          <Image mb={7} src={avatar_url} alt={name} h={"90%"} w={"90%"}></Image>
        </Box>
        <Button
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
          transition={"all .2s ease"}
          transition-timing-function="spring(4 100 10 10)"
          _hover={{
            transform: "translateY(-7px)",
            shadow: "lg",
            bg: btn_bg_colors,
          }}
          boxShadow={"lg"}
          color={text_colors}
          onClick={onClick}
        >
          <Heading fontWeight={"bold"} size={"sm"} textTransform={"uppercase"}>
            {"learn more"}
          </Heading>
        </Button>
      </Flex>
    </Box>
  );
}

export default AboutUsPreviewCard;
