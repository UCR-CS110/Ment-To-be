import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NoProfileCard from "../no-profile-card";
import MenteeProfileCard from "./mentee-profile-card";
import ChatroomCard from "../chatroom-section/chatroom-card";
import MatchCard from "./match-card";

function MenteeCore({ user }) {
  return (
    <SimpleGrid
      spacing={"20px"}
      columns={{ base: 1, md: 2, lg: 3 }}
      justifyContent={"space-evenly"}
    >
      {!user.mentee_profile_exists && (
        <NoProfileCard mentee={true} mentor={false}></NoProfileCard>
      )}

      {user.mentee_profile_exists && (
        <MenteeProfileCard mentee={user}></MenteeProfileCard>
      )}

      <MatchCard></MatchCard>

      <ChatroomCard></ChatroomCard>
    </SimpleGrid>
  );
}

export default MenteeCore;
