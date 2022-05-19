import { Box, Heading, VStack, Flex, Stack } from "@chakra-ui/react";
import React from "react";
// PORTFOLIOS
import Xin from "../../components/about-us-components/xin.js";
import Yenna from "../../components/about-us-components/yenna.js";
import Container from "../../components/container.js";
// COMPONENT IMPORTS
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import DashboardNavBar from "../../components/nav-bar/dashboard-nav-bar.js";
function AboutUsPageIndex() {
  return (
    <Container>
      <LandingPageNavBarCore display_return={true}></LandingPageNavBarCore>
      <VStack>
        <Box mt={5}>
          <Heading fontSize={"5xl"}>about us</Heading>
        </Box>
        <Box mt={5}>
          <Xin></Xin>
        </Box>
        <Box mt={5}>
          <Yenna></Yenna>
        </Box>
      </VStack>
    </Container>
  );
}

export default AboutUsPageIndex;
