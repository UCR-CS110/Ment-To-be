import {
  Image,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Text,
  Heading,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";

import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

function UserProfileCard() {
  return (
    <Flex w="full" alignItems="center">
      <Box maxW="xs" mx="auto" shadow="lg" rounded="lg" overflow="hidden">
        <Image
          w="full"
          h={"36"}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Stack py={4} px={6}>
          <VStack>
            <Box>
              <HStack>
                <Heading
                  fontSize="xl"
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Xin Wang
                </Heading>
                <Box
                  px={3}
                  py={1}
                  bg="gray.600"
                  color="gray.100"
                  fontSize="xs"
                  fontWeight="700"
                  rounded="md"
                >
                  Mentor
                </Box>
              </HStack>
            </Box>
          </VStack>

          <Text
            fontSize="sm"
            textAlign={"justify"}
            py={2}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Hi! I'm Xin (pronounced like “Shin”) - I love to build great things
            with great people while having a great time. I enjoy learning,
            expanding my arsenal of toolsets, and using my knowledge and
            capabilities to aid and impact others!
          </Text>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={BsFillBriefcaseFill} h={5} w={5} mr={1} />

            <Text px={2} fontSize="sm">
              Software Engineer @ VMware
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={5} w={5} mr={1} />

            <Text px={2} fontSize="sm">
              California
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={5} w={5} mr={1} />

            <Text px={2} fontSize="sm">
              xinwng3@gmail.com
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}

export default UserProfileCard;
