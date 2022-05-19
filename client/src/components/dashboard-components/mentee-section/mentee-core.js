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
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import NoProfileCard from "../no-profile-card";

function MenteeCore({ user }) {
  return (
    <SimpleGrid
      spacing={"20px"}
      columns={{ base: 1, md: 2, lg: 3 }}
      justifyContent={"space-evenly"}
    >
      <Box>
        {!user.mentee_profile_exists && (
          <NoProfileCard mentee={true} mentor={false}></NoProfileCard>
        )}
      </Box>
    </SimpleGrid>
  );
}

export default MenteeCore;
