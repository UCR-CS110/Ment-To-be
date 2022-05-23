import { Box, Heading, VStack, Flex, Stack, Center } from "@chakra-ui/react";
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
    <VStack>
      <Container>
        <LandingPageNavBarCore display_return={true}></LandingPageNavBarCore>
        <Box align={"center"}>
          <Heading fontSize={"5xl"}>about the creators</Heading>
        </Box>
        <Box mt={75}>
          <VStack>
            <Box>
              <Xin></Xin>
            </Box>

            <Box mt={20}>
              <Yenna></Yenna>
            </Box>
          </VStack>
        </Box>
      </Container>
    </VStack>
  );
}

export default AboutUsPageIndex;
