import React from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";
import { Container } from "../../components/container.js";
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
