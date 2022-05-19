import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AboutUsYenna from "./about-us-yenna";

export default function Yenna() {
  return (
    <Flex>
      <Box>
        <AboutUsYenna
          name={"Yenna Chang"}
          desc={
            "Nice to meet you, I'm Yenna! I've always been the kind of person who is passionate about making creative ideas come to life and have found a love for building projects with my friends and colleagues."
          }
          pfp_link={"/media/about-us/yenna.jpg"}
        ></AboutUsYenna>
      </Box>
    </Flex>
  );
}
