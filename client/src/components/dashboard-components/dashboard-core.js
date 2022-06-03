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
import NewUserCore from "../new-user-components/new-user-core";

function DashbordCore({ user }) {
  if (
    user.mentee_profile_exists === true ||
    user.mentor_profile_exists === true
  ) {
    return (
      <Container>
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
              Resources
            </Heading>
          </Box>
        </Flex>
      </Container>
    );
  } else {
    console.log(user.mentee_profile_exists);
  }

  if (
    user.mentee_profile_exists === false &&
    user.mentor_profile_exists === false
  ) {
    return <Navigate to="/new-user"></Navigate>;
  }
}

export default DashbordCore;
