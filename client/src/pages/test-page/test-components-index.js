import { VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import UserProfileCard from "../../components/about-us-components/about-us-template-card.js";
import LoginWelcome from "../../components/login-page-components/login-welcome.js";
import Loading from "../../authentication/loading.js";

function TestComponentsHereIndex() {
  return (
    <Container>
      <LandingPageNavBarCore></LandingPageNavBarCore>
      <VStack>
        {/* <UserProfileCard></UserProfileCard> */}
        <LoginWelcome></LoginWelcome>
      </VStack>
    </Container>
  );
}

export default TestComponentsHereIndex;
