import React, { useState, useEffect } from "react";
import axios from "axios";

// COMPONENT IMPORTS
import Container from "../components/container";
import {
  VStack,
  HStack,
  Box,
  Center,
  Heading,
  Spinner,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";

function Loading() {
  const box_bg_colors = useColorModeValue("light.100", "dark.200");

  return (
    <Container mx={"auto"} my={"auto"} pt={100}>
      <Center>
        <VStack>
          <Box p={5}>
            <Box
              minW={{ base: "200px", xs: "300px", md: "500px" }}
              padding="6"
              boxShadow="lg"
              bg={box_bg_colors}
            >
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={9} spacing="4" />
            </Box>
          </Box>
          <HStack>
            <Spinner size="lg" thickness="6px" speed="0.9s" mx={2}></Spinner>
            <Box>
              <Center>
                <Heading size={"md"} lineHeight={"tall"}>
                  Give us a second - we're grabbing your profile...
                </Heading>
              </Center>
            </Box>
          </HStack>
        </VStack>
      </Center>
    </Container>
  );
}

export default Loading;
