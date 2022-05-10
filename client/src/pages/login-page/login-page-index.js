import {
  Box,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";

// COMPONENTS
import LoginPageCore from "../../components/login-page-components/login-page-core.js";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";

function LoginPageIndex() {
  return (
    <Container>
      <NavBarCore></NavBarCore>
      <Stack>
        <VStack>
          <Box my={5}>
            <LoginPageCore></LoginPageCore>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
}

export default LoginPageIndex;
