import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Link,
  Spacer,
  Heading,
  useColorModeValue,
  useDisclosure,
  VStack,
  Center,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState, useEffect, FC, ChangeEvent } from "react";
import Container from "../../container";

import { Navigate } from "react-router-dom";
import DashboardNavBar from "../../nav-bar/dashboard-nav-bar";
import CreateChatRoomCard from "./create-chatroom-card";
import AvailableRooms from "./available-rooms";

import OwnedRoomsCard from "./owned-rooms-card";
import axios from "axios";

function ChatroomCore() {
  const [user, set_user] = useState({});
  const [rooms, set_rooms] = useState([]);
  const [loading, set_loading] = useState(true);
  function handle_loading() {
    setTimeout(() => set_loading(false), 1500);
  }
  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      set_user(data);
    });
  }, []);

  useEffect(() => {
    axios.get("/chat/owned_rooms/" + user._id, {}).then(({ data }) => {
      handle_loading();
      set_rooms(data);
      console.log("R", rooms);
    });
  }, [user]);

  return (
    <Container mb={20}>
      <DashboardNavBar></DashboardNavBar>
      <Flex direction={"column"}>
        <Box my={3}>
          <Heading mx={3} fontSize={"4xl"}>
            Chatrooms
          </Heading>
        </Box>

        <Box my={1}>
          <Box ml={4} mt={1}>
            <SimpleGrid
              spacing={"20px"}
              columns={{ base: 1, md: 2, lg: 3 }}
              justifyContent={"space-evenly"}
            >
              <CreateChatRoomCard></CreateChatRoomCard>
              {loading ? (
                <Container mx={"auto"} my={"auto"} py={100}>
                  <Center>
                    <VStack>
                      <Box p={5}></Box>
                      <Box>
                        <Center>
                          <Spinner
                            size="xl"
                            thickness="6px"
                            speed="0.9s"
                            mx={2}
                            my={5}
                          ></Spinner>
                        </Center>
                      </Box>
                    </VStack>
                  </Center>
                </Container>
              ) : (
                rooms && (
                  <OwnedRoomsCard rooms={rooms} user={user}></OwnedRoomsCard>
                )
              )}
            </SimpleGrid>
          </Box>

          <Box mt={6}>
            <AvailableRooms></AvailableRooms>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ChatroomCore;
