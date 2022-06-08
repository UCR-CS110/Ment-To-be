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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Container from "../container";

import { Navigate } from "react-router-dom";

import DashboardNavBar from "../nav-bar/dashboard-nav-bar";

import MenteeCore from "./mentee-section/mentee-core";
import MentorCore from "./mentor-section/mentor-core";
import SearchCore from "./search-section/search-core";
import ResourcesCore from "./resources-section/resources-core";

function UserDashboard({ user }) {
  return (
    <Container mb={20}>
      <DashboardNavBar></DashboardNavBar>
      <Flex direction={"column"}>
        <Box my={3}>
          <Heading mx={3} fontSize={"4xl"}>
            Hi, {user.first_name}
          </Heading>
        </Box>
        <Box my={3}>
          <Tabs isManual isLazy variant={"unstyled"} size={"lg"}>
            <TabList mb={3}>
              <Tab mx={3}>
                <Heading fontSize={"lg"}>MENTEE</Heading>
              </Tab>
              <Tab>
                <Heading fontSize={"lg"}>MENTOR</Heading>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <MenteeCore user={user}></MenteeCore>
              </TabPanel>
              <TabPanel>
                <MentorCore user={user}></MentorCore>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box my={3}>
          <Heading mx={3} fontSize={"4xl"}>
            Search
          </Heading>

          <Box ml={4} mt={3}>
            <SearchCore></SearchCore>
          </Box>
        </Box>

        <Box my={3}>
          <Heading mx={3} fontSize={"4xl"}>
            Resources
          </Heading>

          <Box ml={4} mt={3}>
            <ResourcesCore></ResourcesCore>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default UserDashboard;
