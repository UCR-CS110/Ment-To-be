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
import Container from "../../container";

import { Navigate } from "react-router-dom";
import DashboardNavBar from "../../nav-bar/dashboard-nav-bar";
import CreateChatRoomCard from "./create-chatroom-card";
import AvailableRooms from "./available-rooms";

function ChatroomCore({ user }) {
  return (
    <Container mb={20}>
      <DashboardNavBar></DashboardNavBar>
      <Flex direction={"column"}>
        <Box my={3}>
          <Heading mx={3} fontSize={"4xl"}>
            Chatrooms
          </Heading>
        </Box>

        <Box my={3}>
          <Box ml={4} mt={3}>
            <CreateChatRoomCard></CreateChatRoomCard>
          </Box>

          <Box my={3}>
            <Heading mx={3} mt={10} fontSize={"4xl"}>
              Available rooms
            </Heading>
          </Box>
          <Box ml={4} mt={3}>
            <AvailableRooms></AvailableRooms>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ChatroomCore;
