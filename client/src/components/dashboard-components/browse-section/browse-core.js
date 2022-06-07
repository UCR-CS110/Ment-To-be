import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
  Link,
  Wrap,
  Button,
  Icon,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import Container from "../../container";
import DashboardNavBar from "../../nav-bar/dashboard-nav-bar";
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
      bg={box_bg_colors}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={"300px"}
      height={{ sm: "fit-content", lg: "375px" }}
      align={"center"}
      justify={"center"}
      py={10}
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
                <Link rounded={"md"} href={"mailto:" + email} target={"_blank"}>
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

function BrowseCore({ results }) {
  return (
    <Container mb={20}>
      <DashboardNavBar></DashboardNavBar>
      <Flex>
        <Stack>
          <Box my={3}>
            <Heading mx={3} mb={3} fontSize={"4xl"}>
              All users
            </Heading>
          </Box>
          <Box>
            <Wrap mx={3} spacing={"30px"} justify={"center"}>
              {results?.map((p) => (
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
            </Wrap>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}

export default BrowseCore;
