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
} from "@chakra-ui/react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

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
            bg={useColorModeValue("light.200", "dark.100")}
            boxShadow={"md"}
            p={8}
          >
            {/* NEED TO SETUP GOOGLE OAUTH */}
            <VStack>
              <Box>
                <Heading
                  fontSize={"xl"}
                  mb={3}
                  color={useColorModeValue("light.900", "dark.900")}
                >
                  Have an account?
                </Heading>

                <Center>
                  <GoogleLogin
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                </Center>
              </Box>
              <HStack>
                <Box textAlign={"left"}>
                  <Text mt={3} fontSize="sm" color={box_font_colors}>
                    New?{" "}
                    <Button variant="link" size={"sm"} color={box_font_colors}>
                      <Text size={"sm"} fontWeight={"bold"}>
                        Sign up with Google.
                      </Text>
                    </Button>
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
