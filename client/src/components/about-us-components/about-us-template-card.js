import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AboutUsContact from "./about-us-contact";

function AboutUsTemplateCard({
  name,
  desc,
  pfp_link,
  email,
  gh_link,
  linkedin_link,
}) {
  return (
    <Flex
      p={10}
      width={{ base: "300px", xs: "-moz-fit-content" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        py={4}
        px={6}
        bg={useColorModeValue("light.900", "dark.100")}
        shadow="lg"
        rounded="md"
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            src={pfp_link}
          />
        </Flex>

        <VStack>
          <HStack>
            <Box mr={1}>
              <Heading
                color={useColorModeValue("light.100", "dark.900")}
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {name}
              </Heading>
            </Box>
          </HStack>
          <Text
            pt={3}
            fontSize={"md"}
            color={useColorModeValue("light.200", "dark.900")}
          >
            {desc}
          </Text>
          <AboutUsContact
            email={email}
            gh_link={gh_link}
            linkedin_link={linkedin_link}
          ></AboutUsContact>
        </VStack>
      </Box>
    </Flex>
  );
}

export default AboutUsTemplateCard;
