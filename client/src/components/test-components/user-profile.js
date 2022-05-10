import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

function UserProfileCard() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        w="md"
        mx="auto"
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
            borderWidth={3}
            borderColor={useColorModeValue("white", "black")}
            bg={"white"}
            src="https://joeschmoe.io/api/v1/xin"
          />
        </Flex>

        <VStack>
          <HStack mt={-3}>
            <Box mr={1}>
              <Heading
                color={useColorModeValue("light.100", "dark.900")}
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Xin Wang
              </Heading>
            </Box>
            <Box
              px={3}
              py={1}
              bg={useColorModeValue("light.200", "dark.900")}
              color={useColorModeValue("light.900", "dark.200")}
              fontSize="xs"
              fontWeight="700"
              rounded="md"
            >
              <Text>Mentor</Text>
            </Box>
          </HStack>
          <Text
            mt={1}
            fontSize={"sm"}
            color={useColorModeValue("light.200", "dark.900")}
          >
            Hi! I'm Xin (pronounced like “Shin”) - I love to build great
            thingswith great people while having a great time. I enjoy learning,
            expanding my arsenal of toolsets, and using my knowledge and
            capabilities to aid and impact others!
          </Text>
        </VStack>

        <Stack mt={-1}>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("light.100", "dark.900")}
          >
            <Icon as={BsFillBriefcaseFill} h={4} w={4} mr={1} />
            <Text px={2} fontSize="xs">
              Software Engineer @ VMware
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("light.100", "dark.900")}
          >
            <Icon as={MdLocationOn} h={4} w={4} mr={1} />
            <Text px={2} fontSize="xs">
              California
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("light.100", "dark.900")}
          >
            <Icon as={MdEmail} h={4} w={4} mr={1} />
            <Text px={2} fontSize="xs">
              xinwng3@gmail.com
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}

export default UserProfileCard;
