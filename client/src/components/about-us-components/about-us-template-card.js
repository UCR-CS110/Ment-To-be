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
      w={{ xs: "fit-content", md: "450px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        py={4}
        px={6}
        bg={useColorModeValue("light.900", "dark.100")}
        shadow="lg"
        rounded="lg"
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
            <Box>
              <Heading
                mt={1}
                color={useColorModeValue("light.100", "dark.900")}
                fontSize={{ base: "3xl", md: "4xl" }}
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
