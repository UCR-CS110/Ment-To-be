import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  keyframes,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
// ANIMATION
import { motion } from "framer-motion";
import React from "react";
// ICON
import { MdLogin, MdOutlineWavingHand as MdAir } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const bounce = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

function LandingPageCore() {
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const bounce_animation = `${bounce} infinite 6s linear`;
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  return (
    <Box w={{ base: "full" }} textAlign={{ base: "left", md: "center" }}>
      <Stack>
        <Box textAlign={{ base: "left", md: "center" }}>
          <Heading
            fontSize={{ base: "6xl", xs: "5xl", sm: "6xl" }}
            letterSpacing="tight"
            mb={3}
          >
            ment-to-be
          </Heading>
          <Box>
            <Text
              px={{ base: 0, lg: 24 }}
              mb={6}
              fontSize={{ base: "lg", xs: "xl", md: "2xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {
                "A platform that matches computer science students with industry professionals."
              }
            </Text>
          </Box>
        </Box>

        <Box>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={4}
            justifyContent={{ sm: "left", md: "center" }}
          >
            <Link rounded={"md"} as={RouterLink} to={"/login"}>
              <Button
                variant="outline"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                cursor="pointer"
                border={"3px solid"}
                borderRadius={"6px"}
                borderColor={btn_border_colors}
                textTransform={"uppercase"}
                padding={"16px 36px "}
                transition={"all .5s ease"}
                _hover={{ bg: btn_bg_colors }}
              >
                <HStack>
                  <Text fontSize="xl" color={btn_border_colors}>
                    Join Now
                  </Text>

                  <Icon
                    as={MdAir}
                    boxSize={"27px"}
                    color={btn_border_colors}
                  ></Icon>
                </HStack>
              </Button>
            </Link>

            {!isLargerThan770 && (
              <Link rounded={"md"} as={RouterLink} to={"/login"}>
                <Button
                  variant="outline"
                  alignItems="center"
                  justifyContent="center"
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  cursor="pointer"
                  border={"3px solid"}
                  borderRadius={"6px"}
                  borderColor={btn_border_colors}
                  textTransform={"uppercase"}
                  padding={"16px 36px "}
                  transition={"all .5s ease"}
                  _hover={{ bg: btn_bg_colors }}
                >
                  <HStack>
                    <Text fontSize="xl" color={btn_border_colors}>
                      Login
                    </Text>

                    <Icon
                      as={MdLogin}
                      boxSize={"27px"}
                      color={btn_border_colors}
                    ></Icon>
                  </HStack>
                </Button>
              </Link>
            )}
          </Stack>
        </Box>
      </Stack>

      <Box w={{ base: "100%" }} my={20}>
        <Box as={motion.div} animation={bounce_animation}>
          <Center>
            <Image
              w={{ xs: "100%", sm: "85%", md: "80%" }}
              h={{ xs: "100%", sm: "85%", md: "80%" }}
              src="/media/landing-page/intro-photo.png"
              alt="loading-page-photo"
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPageCore;
