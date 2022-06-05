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
import UserDashboard from "./user-dashboard";

function DashbordCore({ user }) {
  return <UserDashboard user={user}></UserDashboard>;
}

export default DashbordCore;
