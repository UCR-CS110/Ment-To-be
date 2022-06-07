import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
  useColorModeValue,
  VStack,
  Link,
} from "@chakra-ui/react";

import GoogleAuthentication from "../../authentication/google-authentication";

function SimpleCard() {
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  const box_font_colors = useColorModeValue("light.900", "dark.900");
  return (
    <Flex direction="column">
      <Stack>
        <Flex direction={isLargerThan770 ? "row" : "column"} justify={"center"}>
          <Box my={"auto"}>
            <Heading fontSize={"5xl"} textAlign={"right"} mr={10}>
              Welcome <br></br> back
            </Heading>
          </Box>
          <Image
            src={"/media/login-page/welcome-back-photo.png"}
            w={{ xs: "100%", sm: "75%", md: "43%" }}
            alt={"login-page-photo"}
          ></Image>
        </Flex>
      </Stack>

      <Box>
        <Stack mx={"auto"} py={12} px={6} align={"center"}>
          <Box
            rounded={"sm"}
            bg={useColorModeValue("light.100", "dark.100")}
            boxShadow={"md"}
            p={8}
          >
            <VStack>
              <Center>
                <Box>
                  <Text
                    fontSize={"3xl"}
                    fontWeight="bold"
                    mb={1}
                    color={useColorModeValue("light.900", "dark.900")}
                  >
                    Have an account?
                  </Text>
                </Box>
              </Center>
              <Box>
                <GoogleAuthentication></GoogleAuthentication>
              </Box>

              <HStack>
                <Box textAlign={"left"}>
                  <Text my={2} fontSize="lg" color={box_font_colors}>
                    New?{" "}
                    <Link href="http://localhost:3001/auth/google">
                      <Button
                        variant="link"
                        size={"lg"}
                        color={box_font_colors}
                      >
                        <Text size={"lg"} fontWeight={"bold"}>
                          Join now.
                        </Text>
                      </Button>
                    </Link>
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

function LoginPageCore() {
  return (
    <Flex>
      <SimpleCard></SimpleCard>
    </Flex>
  );
}

export default LoginPageCore;
