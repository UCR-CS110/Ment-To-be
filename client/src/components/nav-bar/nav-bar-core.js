import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
// ICON IMPORTS
import { FcHome } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";
import ButtonLink from "../button-link";
// COMPONENT IMPORTS
import { LightDarkModeSwitcher } from "./light-dark-mode-switcher";

function NavBarCore() {
  const bg = useColorModeValue("light.300", "dark.900");
  const mobile_nav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header w="full" px={{ base: 2 }} py={4}>
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
            >
              <Icon as={FcHome} h={8} w={8} mt={1}></Icon>
            </Link>
          </Flex>
          <Spacer></Spacer>

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <ButtonLink button_text={"test"} website={"/test"}></ButtonLink>

              <ButtonLink
                button_text={"about us"}
                website={"/about-us"}
              ></ButtonLink>

              <ButtonLink button_text={"login"} website={"/login"}></ButtonLink>

              <Box ml={3}>
                <LightDarkModeSwitcher></LightDarkModeSwitcher>
              </Box>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobile_nav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobile_nav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="lg"
              >
                <CloseButton
                  aria-label="close navigation bar"
                  onClick={mobile_nav.onClose}
                />
                <ButtonLink button_text={"test"} website={"/test"}></ButtonLink>

                <ButtonLink
                  button_text={"about us"}
                  website={"/about-us"}
                ></ButtonLink>

                <ButtonLink
                  button_text={"login"}
                  website={"/login"}
                ></ButtonLink>

                <Box>
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
