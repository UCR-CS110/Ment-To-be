import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NoProfileCard from "../no-profile-card";
import MentorProfileCard from "./mentor-profile-card";

function MentorCore({ user }) {
  return (
    <SimpleGrid
      spacing={"20px"}
      columns={{ base: 1, md: 2, lg: 3 }}
      justifyContent={"space-evenly"}
    >
      {!user.mentor_profile_exists && (
        <NoProfileCard mentor={true} mentee={false}></NoProfileCard>
      )}

      {user.mentor_profile_exists && (
        <MentorProfileCard mentor={user}></MentorProfileCard>
      )}
    </SimpleGrid>
  );
}

export default MentorCore;
