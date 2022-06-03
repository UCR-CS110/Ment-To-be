import { Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
// COMPONENTS
import NewUserCore from "../../components/new-user-components/new-user-core.js";

function NewUserIndex() {
  return (
    <Container>

      <Stack>
        <VStack>
          <NewUserCore></NewUserCore>
        </VStack>
      </Stack>
    </Container>
  );
}

export default NewUserIndex;
