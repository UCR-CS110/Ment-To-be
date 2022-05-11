import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";

// COMPONENTS
import HowDoesItWork from "../../components/landing-page-components/how-does-it-work";
import LandingPageCore from "../../components/landing-page-components/landing-page-core.js";
import LandingPageFooter from "../../components/landing-page-components/landing-page-footer.js";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";

function LandingPageIndex() {
  const how_does_it_work_bg_colors = useColorModeValue("light.200", "dark.200");
  return (
    <Stack>
      <Container>
        <NavBarCore></NavBarCore>
        <Stack>
          <Box my={5}>
            <LandingPageCore></LandingPageCore>
          </Box>
        </Stack>
      </Container>

      <Box as="section" bgColor={how_does_it_work_bg_colors} py={10}>
        <Container p={7}>
          <Box align={"center"} mb={10}>
            <Heading
              fontSize={"4xl"}
              color={useColorModeValue("light.900", "dark.900")}
            >
              Our goals
            </Heading>
          </Box>
          <Box my={5}>
            <HowDoesItWork></HowDoesItWork>
          </Box>
        </Container>
      </Box>

      <Box mt={10}>
        <Container mt={5} w={"fit-content"}>
          <Box align={"center"} pb={30}>
            <LandingPageFooter></LandingPageFooter>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}

export default LandingPageIndex;
