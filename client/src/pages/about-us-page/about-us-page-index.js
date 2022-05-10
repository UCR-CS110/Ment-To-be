import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Container from "../../components/container.js";
// COMPONENT IMPORTS
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";

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
