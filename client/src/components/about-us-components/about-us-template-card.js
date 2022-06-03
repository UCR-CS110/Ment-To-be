import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  Center,
  Spacer,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import React from "react";
import AboutUsContact from "./about-us-contact";

function AboutUsTemplateCard({
  first_name,
  last_name,
  desc,
  pfp_link,
  email,
  gh_link,
  linkedin_link,
}) {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const name_color = useColorModeValue("light.900", "dark.100");
  return (
    <VStack justifyContent="center" align={"center"} mt={3} mb={45}>
      <Box
        justifyContent={"center"}
        verticalAlign={"center"}
        mt={is_larger_than_md ? "5%" : "15%"}
        
      >
        {is_larger_than_md && (
          <VStack>
            <Image
              mx={5}
              mb={3}
              w={"220px"}
              src={pfp_link}
              clipPath={"circle()"}
            />
            <Heading color={name_color} fontSize={"4xl"} >
              {first_name} {last_name}
            </Heading>
          </VStack>
        )}

        {!is_larger_than_md && (
          <VStack>
            <Image
              mx={5}
              my={5}
              w={"220px"}
              src={pfp_link}
              clipPath={"circle()"}
            />
            <Heading color={name_color} fontSize={"4xl"}>
              {first_name} {last_name}
            </Heading>
          </VStack>
        )}
      </Box>

      <VStack>
        <Box mt={1} mb={3} p={2}>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("light.900", "dark.100")}
          >
            {desc}
          </Text>
        </Box>
      </VStack>

      <AboutUsContact
        email={email}
        gh_link={gh_link}
        linkedin_link={linkedin_link}
      ></AboutUsContact>
    </VStack>
  );
}

export default AboutUsTemplateCard;
