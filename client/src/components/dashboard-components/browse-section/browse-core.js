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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Center,
  StatArrow,
  StatGroup,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Container from "../../container";
import DashboardNavBar from "../../nav-bar/dashboard-nav-bar";
import { MdEmail } from "react-icons/md";

function ResultTemplate({
  mentee_profile_exists,
  mentor_profile_exists,
  full_name,
  first_name,
  last_name,
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
      w={"270px"}
      height={{ sm: "fit-content", lg: "350px" }}
      align={"center"}
      justify={"center"}
      py={10}
    >
      <Flex direction={"column"}>
        <Box>
          <Stack direction={is_larger_than_md ? "row" : "column"}>
            <VStack>
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

              <Heading
                align={"center"}
                fontSize={"xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                verticalAlign="middle"
                mb={2}
                lineHeight={"7"}
              >
                {first_name}
                <br></br>
                {last_name}
              </Heading>

              <Flex justify={"space-between"}>
                <Box>
                  {mentee_profile_exists && (
                    <Tag size={"md"} borderRadius={"full"} colorScheme={"red"}>
                      Mentee
                    </Tag>
                  )}
                </Box>
                <Box>
                  {mentor_profile_exists && (
                    <Tag
                      ml={2}
                      size={"md"}
                      borderRadius={"full"}
                      colorScheme={"green"}
                    >
                      Mentor
                    </Tag>
                  )}
                </Box>
              </Flex>

              <Box align={"center"}>
                <Link
                  rounded={"md"}
                  href={"mailto:" + email}
                  target={"_blank"}
                  _hover={{ textTransform: "none" }}
                >
                  <Button
                    my={2}
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
                    padding={"5px 8px "}
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
                        {"REACH OUT"}
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
  const [num_users, set_num_users] = useState(9);
  const [num_mentors, set_num_mentors] = useState(9);
  const [num_mentees, set_num_mentees] = useState(9);
  const [loading, set_loading] = useState(true);
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  function handle_loading() {
    setTimeout(() => set_loading(false), 1500);
  }

  useEffect(() => {
    handle_loading();
    process_stats();
  }, [results]);

  function process_stats() {
    set_num_mentees(
      results.filter(function (s) {
        return s.mentee_profile_exists;
      }).length
    );

    set_num_mentors(
      results.filter(function (s) {
        return s.mentor_profile_exists;
      }).length
    );

    set_num_users(results.length);
  }

  return (
    <Container mb={20}>
      <DashboardNavBar></DashboardNavBar>
      <Flex>
        <Stack>
          <Box my={3} align="center">
            <Heading mx={3} fontSize={"4xl"}>
              Community members 🌎
            </Heading>
          </Box>
          {loading ? (
            <Center py={10}>
              <VStack>
                <Box>
                  <Center>
                    <Spinner
                      size="xl"
                      thickness="6px"
                      speed="0.9s"
                      mx={2}
                    ></Spinner>
                  </Center>
                </Box>
              </VStack>
            </Center>
          ) : (
            <Stack
              justify="center"
              direction={"row"}
              spacing={8}
              pt={2}
              pb={10}
            >
              <Box>
                <Stat>
                  <StatLabel>
                    <Heading fontSize={"md"} textTransform={"uppercase"}>
                      # users
                    </Heading>
                  </StatLabel>
                  <StatNumber align={"center"}>
                    <Text fontWeight={"bold"} fontSize={"4xl"}>
                      {num_users}
                    </Text>
                  </StatNumber>
                </Stat>
              </Box>

              <Box>
                <Stat>
                  <StatLabel>
                    <Heading fontSize={"md"} textTransform={"uppercase"}>
                      # Mentors
                    </Heading>
                  </StatLabel>
                  <StatNumber align={"center"}>
                    <Text fontWeight={"bold"} fontSize={"4xl"}>
                      {num_mentors}
                    </Text>
                  </StatNumber>
                </Stat>
              </Box>

              <Box>
                <Stat>
                  <StatLabel>
                    <Heading fontSize={"md"} textTransform={"uppercase"}>
                      # Mentees
                    </Heading>
                  </StatLabel>
                  <StatNumber align={"center"}>
                    <Text fontWeight={"bold"} fontSize={"4xl"}>
                      {num_mentees}
                    </Text>
                  </StatNumber>
                </Stat>
              </Box>
            </Stack>
          )}
          <Box>
            <Wrap mx={3} spacing={"30px"} justify={"center"}>
              {results?.map((p) => (
                <WrapItem key={p._id}>
                  <ResultTemplate
                    mentee_profile_exists={p.mentee_profile_exists}
                    mentor_profile_exists={p.mentor_profile_exists}
                    full_name={p.full_name}
                    first_name={p.first_name}
                    last_name={p.last_name}
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
