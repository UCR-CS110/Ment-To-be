import {
  Center,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  VStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoogleLogin } from "react-google-login";
const responseGoogle = (response) => {
  console.log(response);
};

function SimpleCard() {
  return (
    <Flex align={"center"} justify={"center"} borderRadius={"sm"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Welcome back</Heading>
        </Stack>
        <Box
          rounded={"sm"}
          bg={useColorModeValue("light.200", "dark.100")}
          boxShadow={"md"}
          p={8}
        >
          {/* NEED TO SETUP GOOGLE OAUTH */}
          <VStack>
            <Heading
              fontSize={"xl"}
              my={3}
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
          </VStack>
        </Box>
      </Stack>
    </Flex>
  );
}
function LoginPageCore() {
  return (
    <VStack>
      <SimpleCard></SimpleCard>
    </VStack>
  );
}

export default LoginPageCore;
