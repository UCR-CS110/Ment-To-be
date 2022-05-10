import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Box,
  useColorModeValue,
  Link,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import ButtonLink from "../button-link";

function LoginPageCore() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex
        justify="center"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <Text
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            mb={6}
          >
            <Center>
              <Heading display="block">ment-to-be</Heading>
            </Center>
          </Text>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Center>
              <Box display="inline-flex" rounded="md" shadow="md"></Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                {/* join-now-page */}

                <ButtonLink
                  button_text={"join now"}
                  website={"/join-now"}
                ></ButtonLink>

                {/* join-now-page */}

                <ButtonLink
                  button_text={"login"}
                  website={"/login"}
                ></ButtonLink>
              </Box>
            </Center>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginPageCore;
