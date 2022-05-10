import React from "react";
import {
  useColorModeValue,
  useDisclosure,
  Flex,
  chakra,
  HStack,
  VStack,
  Box,
  IconButton,
  CloseButton,
  Button,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

// COMPONENT IMPORTS
import { LightDarkModeSwitcher } from "./light-dark-mode-switcher";
import ButtonLink from "../button-link";

function NavBarCore() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link
              px={2}
              py={1}
              as={RouterLink}
              to="/"
              _hover={{
                textDecoration: "none",
              }}
              ml={3}
            >
              <Text fontSize="xl" fontWeight="medium">
                ment-to-be
              </Text>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <ButtonLink
                button_text={"about us"}
                website={"/about-us"}
              ></ButtonLink>
            </HStack>

            <Button variant="solid" size="sm">
              login
            </Button>
            <Box ml={2}>
              <LightDarkModeSwitcher></LightDarkModeSwitcher>
            </Box>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button variant="ghost">about us</Button>
                <Button variant="solid" size="sm">
                  login
                </Button>

                <Box ml={2}>
                  <LightDarkModeSwitcher></LightDarkModeSwitcher>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default NavBarCore;
