import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";

function MenteeProfileCard({ mentee }) {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("#f4effc", "#242629");
  const text_colors = useColorModeValue("light.1000", "#fff3ec");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  const btn_bg_colors = useColorModeValue("#484E7E", "#fffffe");
  const btn_text_colors = useColorModeValue("dark.100", "dark.900");

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
      align={"center"}
    >
      <Flex direction={"column"} mt={5}>
        <Box>
          <Box>
            <Stack direction={is_larger_than_md ? "row" : "column"}>
              {!is_larger_than_md && (
                <Center mb={3}>
                  <Box
                    border={"5px solid"}
                    borderRadius={"500px"}
                    borderColor={"transparent"}
                    background={
                      "radial-gradient(circle,#484E7E 0%, #2F99C3 100%)"
                    }
                    boxSize={"50%"}
                    boxShadow={"xl"}
                  >
                    <Image
                      backgroundColor="transparent"
                      src={mentee.picture}
                      clipPath={"circle()"}
                      w={"100%"}
                      h={"100%"}
                    ></Image>
                  </Box>
                </Center>
              )}

              <Heading
                align={is_larger_than_md ? "left" : "center"}
                fontSize={"3xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                pb={3}
                verticalAlign="middle"
                lineHeight={"10"}
              >
                Your Mentee Profile
              </Heading>
              <Spacer></Spacer>
              {is_larger_than_md && (
                <Box
                  border={"5px solid"}
                  borderRadius={"500px"}
                  borderColor={"transparent"}
                  background={
                    "radial-gradient(circle,#484E7E 0%, #2F99C3 100%)"
                  }
                  boxSize={"60%"}
                  justify={"center"}
                >
                  {is_larger_than_md && (
                    <Image
                      justify={"center"}
                      backgroundColor="transparent"
                      src={mentee.picture}
                      clipPath={"circle()"}
                      w={"100%"}
                      h={"100%"}
                    ></Image>
                  )}
                </Box>
              )}
            </Stack>
          </Box>
        </Box>

        <Flex align={"left"} direction={"column"} mt={3}>
          <Box my={2}>
            <Stack>
              <Heading
                color={text_colors}
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                Email
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_email}
              </Text>
            </Stack>
          </Box>

          <Box my={2}>
            <Stack>
              <Heading
                color={text_colors}
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                {"University & Year"}
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_university}
                {" - "}
                {mentee.mentee_profile.mentee_year !== "none" &&
                  mentee.mentee_profile.mentee_year}
              </Text>
            </Stack>
          </Box>

          <Box my={2}>
            <Stack>
              <Heading
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
                color={text_colors}
              >
                Preferred Language
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_language}
              </Text>
            </Stack>
          </Box>

          <Box my={2}>
            <Stack>
              <Heading
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
                color={text_colors}
              >
                Guidance Topic
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_topic}
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Box align={"center"} mt={3}>
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
            padding={"10px 18px "}
            transition={"all .2s ease"}
            transition-timing-function="spring(4 100 10 10)"
            _hover={{
              transform: "translateY(-3px)",
              shadow: "lg",
            }}
            boxShadow={"lg"}
            color={text_colors}
            bg={btn_bg_colors}
          >
            <HStack>
              <Text
                fontWeight={"bold"}
                fontSize={"lg"}
                textTransform={"uppercase"}
                color={btn_text_colors}
              >
                {"Edit"}
              </Text>
              <Icon
                alignContent={"center"}
                as={FaUserEdit}
                boxSize={"18px"}
                color={btn_text_colors}
              />
            </HStack>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default MenteeProfileCard;
