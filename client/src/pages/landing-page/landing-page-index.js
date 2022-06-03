import {
  Box,
  Heading,
  Stack,
  Text,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";


// COMPONENTS
import HowDoesItWork from "../../components/landing-page-components/how-does-it-work";
import LandingPageCore from "../../components/landing-page-components/landing-page-core.js";
import LandingPageFooter from "../../components/landing-page-components/landing-page-footer.js";
import NavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import ActionButton from "../../components/action-button";


function LandingPageIndex() {
  const how_does_it_work_bg_colors = useColorModeValue("light.100", "dark.200");
  return (
    <Stack>
      <Container>
        <NavBarCore></NavBarCore>
        <Stack>
          <Box my={{base: "5", xs: "none", md:"5vh"}}>
            <LandingPageCore></LandingPageCore>
          </Box>
        </Stack>
      </Container>

      <Box
        as="section"
        w={"100%"}
        h={"100%"}
        bgColor={how_does_it_work_bg_colors}
        py={20}
        px={8}
        
        
      >
        <Container p={0}>
          <Box align={"center"} mb={10}>
            <Heading
              fontSize={"5xl"}
              color={useColorModeValue("light.1000", "dark.900")}
            >
              Our goals 🎯
            </Heading>
          </Box>
          <Box my={5} >
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
