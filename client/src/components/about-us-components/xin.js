import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AboutUsTemplateCard from "./about-us-template-card";

export default function Xin() {
  return (
    <Flex>
      <Box>
        <AboutUsTemplateCard
          name={"Xin Wang"}
          desc={
            "Hi! I'm Xin (pronounced like “Shin”) - I love to build great things with great people while having a great time. I enjoy learning, expanding my arsenal of toolsets, and using my knowledge and capabilities to aid and impact others!"
          }
          pfp_link={"/media/about-us/xin.jpg"}
        ></AboutUsTemplateCard>
      </Box>
    </Flex>
  );
}
