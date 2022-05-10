import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";

// COMPONENTS
import LoginPageCore from "../../components/login-page-components/login-page-core.js";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";

function LoginPageIndex() {
  const how_does_it_work_bg_colors = useColorModeValue("light.200", "dark.200");
  return (
    <Container>
      <Stack>
        <NavBarCore></NavBarCore>
        <Stack>
          <Box my={5}>
            <LoginPageCore></LoginPageCore>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default LoginPageIndex;
