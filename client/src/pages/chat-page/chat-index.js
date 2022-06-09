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
  useMediaQuery,
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
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
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
              <Stack direction={is_larger_than_md ? "row" : "column"}>
                {is_larger_than_md && (
                  <Image
                    src={room_info.pic}
                    clipPath={"circle()"}
                    w={"15%"}
                    h={"15%"}
                  ></Image>
                )}

                {!is_larger_than_md && (
                  <Center>
                    <Image
                      src={room_info.pic}
                      clipPath={"circle()"}
                      w={"28%"}
                      h={"28%"}
                    ></Image>
                  </Center>
                )}

                <Box>
                  <Stack>
                    <Box>
                      <Heading
                        mx={3}
                        fontSize={is_larger_than_md ? "4xl" : "2xl"}
                        align={!is_larger_than_md ? " center" : "none"}
                      >
                        Messaging in {room_info.name}
                      </Heading>
                    </Box>
                    <Box>
                      <Text
                        fontWeight={"bold"}
                        mx={3}
                        fontSize={is_larger_than_md ? "2xl" : "xl"}
                        align={!is_larger_than_md ? " center" : "none"}
                      >
                        ROOM ID: {room_id}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Flex>
        <Center>
          <VStack my={10}>
            <ChatBox id={room_id}></ChatBox>
          </VStack>
        </Center>
      </Container>
    );
  }
}

export default ChatIndex;
