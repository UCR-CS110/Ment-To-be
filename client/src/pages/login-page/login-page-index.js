import LoginPageCore from "../../components/login-components/login-page-core.js";
import React from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";
import { Container } from "../../components/container.js";

function LoginPageIndex() {
  return (
    <Container>
      <NavBarCore></NavBarCore>
      <VStack>
        <LoginPageCore></LoginPageCore>
      </VStack>
    </Container>
  );
}

export default LoginPageIndex;
