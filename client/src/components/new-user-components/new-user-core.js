import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  useColorModeValue,
  VStack,
  Spacer,
  Center,
  Text,
  Stack,
  useMediaQuery,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegHandPointRight } from "react-icons/fa";

// COMPONENTS
import NewUserSignUp_Mentee_Mentor_Caller from "./mentee_mentor_caller";

function NewUserCore({ user }) {
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  const box_bg_colors = useColorModeValue("#e2daeb", "#0e172c");
  const text_colors = useColorModeValue("#0e172c", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const help_bg_colors = useColorModeValue("light.1000", "dark.300");
  const help_text_colors = useColorModeValue("light.100", "light.1000");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      bg={box_bg_colors}
      p={isLargerThan770 ? 12 : 8}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={{ xs: "fit-content" }}
      h={{ sm: "fit-content",lg: "950px" }}
    >
      <Stack direction={"column"}>
        <Box align={"left"} my={5}>
          <Heading
            fontSize={{ xs: "3xl", lg: "4xl" }}
            mb={4}
            lineHeight={10}
            color={text_colors}
            textAlign={"center"}
          >
            Looks like you're new to our community, Xin! 👋
          </Heading>
        </Box>

        <Stack direction={isLargerThan770 ? "row" : "column"}>
          <Center>
            <Box justifyContent={"center"}>
              <Image
              p={10}
                src={"/media/login-page/new-user.svg"}
         
           
                w={{ xs: "50vh", md: "75%", lg: "75vh" }}
                h={{ xs: "50vh", md: "75%", lg: "70%" }}
                alt={"login-page-photo"}
                display={isLargerThan770 ? "block" : "none"}
              ></Image>
            </Box>

            <Box>
              <Image
                src={"/media/login-page/new-user.svg"}
                my={6}
                w={{ xs: "100vh", md: "75%" }}
                h={{ xs: "auto-fit", md: "75%" }}
                alt={"login-page-photo"}
                display={!isLargerThan770 ? "block" : "none"}
              ></Image>
              <Heading
                mt={isLargerThan770 ? 0 : 0}
                fontSize={{ xs: "2xl", lg: "4xl" }}
                fontWeight={"extrabold"}
                color={text_colors}
              >
                Getting started
              </Heading>

              <Box mb={-5}>
                <NewUserSignUp_Mentee_Mentor_Caller
                  mentee={true}
                ></NewUserSignUp_Mentee_Mentor_Caller>
              </Box>
              <Box>
                <NewUserSignUp_Mentee_Mentor_Caller
                  mentee={true}
                ></NewUserSignUp_Mentee_Mentor_Caller>
              </Box>
              <Box align={"center"}>
                <Button
                  variant="outline"
                  w={{ base: "full", sm: "auto" }}
                  size="md"
                  cursor="pointer"
                  border={"3px solid"}
                  borderRadius={"6px"}
                  borderColor={btn_border_colors}
                  textTransform={"uppercase"}
                  transition={"all .5s ease"}
                  _hover={{ bg: btn_bg_colors }}
                  position={"relative"}
                  onClick={onToggle}
                >
                  <Text fontSize={"md"} color={btn_border_colors}>
                    Which one should I pick?
                  </Text>
                </Button>
                <Collapse in={isOpen} animateOpacity>
                  <Box
                    p={7}
                    maxW={"xs"}
                    bg={help_bg_colors}
                    color={help_text_colors}
                    mt="4"
                    rounded="md"
                    shadow="lg"
                  >
                    <Text
                      fontSize={"lg"}
                      textAlign={"left"}
                      fontWeight={"bold"}
                    >
                      {
                        "Creating a Mentee profile will allow you to be matched with professionals and receive their guidance."
                      }
                    </Text>{" "}
                    <br></br>
                    <Text
                      fontSize={"lg"}
                      textAlign={"left"}
                      fontWeight={"bold"}
                    >
                      {
                        "Creating a Mentor profile will pair you with students who are currently seeking for mentorship."
                      }
                    </Text>{" "}
                    <br></br>
                    <Text
                      fontSize={"lg"}
                      textAlign={"left"}
                      fontWeight={"bold"}
                    >
                      {
                        "Don't worry - you can always manage and edit your profile(s) later!"
                      }
                    </Text>
                  </Box>
                </Collapse>
              </Box>
            </Box>
          </Center>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default NewUserCore;
