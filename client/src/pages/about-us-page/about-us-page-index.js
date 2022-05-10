import React from "react";
import { VStack, Heading, Stack, Box, Flex } from "@chakra-ui/react";

// COMPONENT IMPORTS
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";
import Container from "../../components/container.js";

function AboutUsPageIndex() {
  return (
    <Container>
      <NavBarCore></NavBarCore>
      <VStack>
        <Flex>
          <Box>
            <Heading>About Us</Heading>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
}

export default AboutUsPageIndex;
