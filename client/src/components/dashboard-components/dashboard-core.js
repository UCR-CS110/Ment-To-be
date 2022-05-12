import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  Heading,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Container from "../container";
import LandingPageNavBarCore from "../nav-bar/landing-page-nav-bar-core.js";
import DashboardNavBar from "../nav-bar/dashboard-nav-bar";
import UserProfileCard from "../about-us-components/about-us-template-card.js";

function DashbordCore({ user }) {
  return (
    <Container>
      <DashboardNavBar></DashboardNavBar>
      <VStack>
        <Heading>Hi, {user.first_name}</Heading>
      </VStack>
    </Container>
  );
}

export default DashbordCore;
