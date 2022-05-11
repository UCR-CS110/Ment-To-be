import { VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";
import UserProfileCard from "../../components/test-components/user-profile.js";

function TestComponentsHereIndex() {
  return (
    <Container>
      <NavBarCore></NavBarCore>
      <VStack>
        <UserProfileCard></UserProfileCard>
      </VStack>
    </Container>
  );
}

export default TestComponentsHereIndex;
