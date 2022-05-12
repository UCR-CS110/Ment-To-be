import { Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
// COMPONENTS
import LoginPageCore from "../../components/login-page-components/login-page-core.js";
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";

function LoginPageIndex() {
  return (
    <Container>
      <LandingPageNavBarCore display_return={true}></LandingPageNavBarCore>
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
