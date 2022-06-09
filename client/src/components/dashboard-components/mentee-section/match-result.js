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

  
function MatchResult({matched}) {
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
        w={"720px"}
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
                  {matched.full_name}
                </Heading>
  
                <HStack>
                  <Box>
                    {matched.mentee_profile_exists && (
                      <Tag size={"lg"} borderRadius={"full"} colorScheme={"red"}>
                        Mentee
                      </Tag>
                    )}
                  </Box>
                  <Box mx={3}>
                    {matched.mentor_profile_exists && (
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
                    src={matched.picture}
                    clipPath={"circle()"}
                    w={"100px"}
                  ></Image>
                </Box>
  
                <Box align={"center"} my={3}>
                  <Link
                    rounded={"md"}
                    href={"mailto:" + matched.email}
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
  export default MatchResult;