import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AboutUsTemplateCard from "./about-us-template-card";

export default function Yenna() {
  return (
    <Flex>
      <Box>
        <AboutUsTemplateCard
          name={"Yenna Chang"}
          desc={
            "Nice to meet you, I'm Yenna! I've always been the kind of person who is passionate about making creative ideas come to life and have found a love for building projects with my friends and colleagues."
          }
          pfp_link={"/media/about-us/yenna.jpg"}
          gh_link={"https://github.com/changyenna"}
          linkedin_link={"https://www.linkedin.com/in/yenna-chang/"}
          // add your email here yenna
          email={""}
        ></AboutUsTemplateCard>
      </Box>
    </Flex>
  );
}
