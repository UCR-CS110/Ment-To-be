import {
  Box,
  Heading,
  VStack,
  Flex,
  Stack,
  Center,
  Spacer,
  SimpleGrid,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
// PORTFOLIOS
import Xin from "../../components/about-us-components/xin.js";
import Yenna from "../../components/about-us-components/yenna.js";
import Michelle from "../../components/about-us-components/michelle.js";
import Jeanette from "../../components/about-us-components/jeanette.js";
import Container from "../../components/container.js";
// COMPONENT IMPORTS
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import DashboardNavBar from "../../components/nav-bar/dashboard-nav-bar.js";

function Profiles() {
  return (
    <Center>
      <SimpleGrid
        spacing={"20px"}
        maxWidth={"750px"}
        mt={-5}
        mb={100}
        columns={{ base: 1, md: 2 }}
        justifyContent={"space-evenly"}
      >
        <Box mt={25}>
          <Jeanette></Jeanette>
        </Box>

        <Box mt={25}>
          <Yenna></Yenna>
        </Box>

        <Box mt={25}>
          <Michelle> </Michelle>
        </Box>

        <Box mt={25}>
          <Xin></Xin>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

function AboutUsPageIndex() {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Container>
        <LandingPageNavBarCore display_return={true}></LandingPageNavBarCore>

        <Flex direction={is_larger_than_md ? "row" : "column"} mt={5}>
          <Box>
            {is_larger_than_md && (
              <Heading mr={-3} mt={"65%"} fontSize={"5xl"}>
                about <br></br> the team 🏆
              </Heading>
            )}
            {!is_larger_than_md && (
              <Heading align={"left"} fontSize={"5xl"}>
                about <br></br> the team 🏆
              </Heading>
            )}
          </Box>
          <Spacer></Spacer>
          <Box>
            <Profiles></Profiles>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default AboutUsPageIndex;
