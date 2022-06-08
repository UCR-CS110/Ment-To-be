import React from "react";
import {
  Flex,
  Box,
  Stack,
  Heading,
  HStack,
  VStack,
  Text,
  Spacer,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ChatBox from "../../components/chatroom-components/chat-core/chat-box";
import Container from "../../components/container";
import ChatRoomNavBar from "../../components/nav-bar/chatroom-nav-bar";
import axios from "axios";
import { useState, useEffect } from "react";

function ChatIndex() {
  const [room_info, set_room_info] = useState({});
  let { room_id } = useParams();
  const [loading, set_loading] = useState(true);
  function handle_loading() {
    setTimeout(() => set_loading(false), 1500);
  }

  useEffect(() => {
    handle_loading();
    axios
      .get(`/chat/find_room/` + room_id, {})
      .then((response) => set_room_info(response.data));
  }, []);

  if (loading) {
    return (
      <Container mx={"auto"} my={"auto"} pt={100}>
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
                ></Spinner>
              </Center>
            </Box>
          </VStack>
        </Center>
      </Container>
    );
  } else {
    return (
      <Container mb={20}>
        <ChatRoomNavBar display_return={true}></ChatRoomNavBar>
        <Flex>
          <Flex>
            <Box my={3}>
              <HStack direction={"row"}>
                <Image
                  src={room_info.pic}
                  clipPath={"circle()"}
                  w={"15%"}
                  h={"15%"}
                ></Image>
                <Box>
                  <Stack>
                    <Box>
                      <Heading mx={3} fontSize={"4xl"}>
                        Messaging in {room_info.name}
                      </Heading>
                    </Box>
                    <Box>
                      <Text fontWeight={"bold"} mx={3} fontSize={"2xl"}>
                        ROOM ID: {room_id}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </HStack>
            </Box>
          </Flex>
        </Flex>
        <Center>
          <VStack my={10}>
            <ChatBox></ChatBox>
          </VStack>
        </Center>
      </Container>
    );
  }
}

export default ChatIndex;
