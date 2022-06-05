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
  useMediaQuery,
} from "@chakra-ui/react";
import { FaRegHandPointRight } from "react-icons/fa";

function NoProfileCard({ mentee, mentor }) {
  const box_bg_colors = useColorModeValue("light.100", "dark.200");
  const text_colors = useColorModeValue("light.1000", "dark.900");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.1000", "dark.900");
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );
  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      w={is_larger_than_md ? "none" : "310px"}
      height={{ sm: "fit-content", md: "570px", lg: "570px" }}
    >
      <Flex direction={"column"} justify="center" mt={0}>
        <Box>
          {mentee && !mentor && (
            <Heading fontSize="3xl" my={0} lineHeight={10} color={text_colors}>
              Seeking mentorship? Create your
              <Heading
                display={"inline"}
                fontSize="3xl"
                w="full"
                bgClip="text"
                bgGradient={highlight_font_gradient}
                fontWeight="bold"
                textTransform={"uppercase"}
              >
                {" "}
                Mentee{" "}
              </Heading>
              profile & start matching.
            </Heading>
          )}
          {!mentee && mentor && (
            <Heading fontSize="3xl" my={0} color={text_colors}>
              {"Want to help?"} <br></br>
              {"Match with mentees by creating your "}
              <Heading
                display={"inline"}
                fontSize="3xl"
                w="full"
                bgClip="text"
                bgGradient={highlight_font_gradient}
                fontWeight="bold"
                textTransform={"uppercase"}
                textDecoration={"underline"}
              >
                Mentor{" "}
              </Heading>
              profile.
            </Heading>
          )}
        </Box>
        <Box>
          <Image
            my={3}
            backgroundColor="transparent"
            src={"/media/dashboard/no-profile-img.svg"}
            w={"400px"}
            h={"100%"}
          ></Image>
        </Box>
        <Box align={"center"} mt={7}>
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
              bg: btn_bg_colors,
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
                {"Get started"}
              </Text>
              <Icon as={FaRegHandPointRight} boxSize={"25px"} />
            </HStack>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NoProfileCard;
