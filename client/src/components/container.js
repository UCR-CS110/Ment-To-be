import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
  <Box
    w="full"
    mx="auto"
    maxW="4xl"
    px={{ base: "7", md: "8" }}
    overflow={"hidden"}
    {...props}
  />
);

export default Container;
