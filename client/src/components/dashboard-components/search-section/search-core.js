import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SearchCard from "./search-card";
import FetchAllUsersCard from "./fetch-all-users-card";

function SearchCore() {
  return (
    <SimpleGrid
      spacing={"20px"}
      columns={{ base: 1, md: 2, lg: 3 }}
      justifyContent={"space-evenly"}
    >
      <SearchCard></SearchCard>
      <FetchAllUsersCard></FetchAllUsersCard>
    </SimpleGrid>
  );
}

export default SearchCore;
