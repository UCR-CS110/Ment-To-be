import { VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import UserProfileCard from "../../components/about-us-components/about-us-template-card.js";
import Loading from "../../authentication/loading.js";
import ReviewCore from "../../components/dashboard-components/review/review-core.js";
import Xin from "../../components/about-us-components/xin.js";
import Yenna from "../../components/about-us-components/yenna.js";
function TestComponentsHereIndex() {
  return (
    <Container>
      <LandingPageNavBarCore></LandingPageNavBarCore>
      <VStack>
        <Xin></Xin>
        <Yenna></Yenna>
        <UserProfileCard></UserProfileCard>
        <ReviewCore></ReviewCore>
      </VStack>
    </Container>
  );
}

export default TestComponentsHereIndex;
