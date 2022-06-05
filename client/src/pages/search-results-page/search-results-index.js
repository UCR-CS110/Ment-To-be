import { Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container.js";
// COMPONENTS
import NewUserCore from "../../components/new-user-components/new-user-core.js";

function SearchResultsIndex({ response }) {
  return (
    <Container>
      <Stack>
        <VStack mt={20}>
          <NewUserCore></NewUserCore>
        </VStack>
      </Stack>
    </Container>
  );
}

export default SearchResultsIndex;
