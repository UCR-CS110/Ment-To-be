import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NoProfileCard from "../no-profile-card";

function MentorCore({ user }) {
  return (
    <SimpleGrid
      spacing={"20px"}
      columns={{ base: 1, md: 2, lg: 3 }}
      justifyContent={"space-evenly"}
    >
      <Box>
        {!user.mentor_profile_exists && (
          <NoProfileCard mentee={false} mentor={true}></NoProfileCard>
        )}
      </Box>
    </SimpleGrid>
  );
}

export default MentorCore;
