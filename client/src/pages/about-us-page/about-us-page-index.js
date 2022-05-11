import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
// PORTFOLIOS
import Xin from "../../components/about-us-components/xin.js";
import Container from "../../components/container.js";
// COMPONENT IMPORTS
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";

function AboutUsPageIndex() {
  return (
    <Container>
      <NavBarCore></NavBarCore>
      <VStack>
        <Box mt={5}>
          <Heading fontSize={"5xl"}>about us</Heading>
        </Box>

        <Box mb={"10px"}>
          <Xin></Xin>
        </Box>
      </VStack>
    </Container>
  );
}

export default AboutUsPageIndex;
