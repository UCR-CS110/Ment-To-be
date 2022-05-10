import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  keyframes,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  Link,
  HStack,
} from "@chakra-ui/react";
import React from "react";

// ANIMATION
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// ICON
import { MdLogin, MdOutlineWavingHand as MdAir } from "react-icons/md";

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
          <Heading fontSize={{ base: "6xl" }} letterSpacing="tight" mb={3}>
            ment-to-be
          </Heading>
          <Box>
            <Text
              px={{ base: 0, lg: 24 }}
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
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
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  as={RouterLink}
                  to={"/login"}
                >
                  <Text color={btn_border_colors}>Join Now</Text>
                </Link>
                <Icon
                  as={MdAir}
                  boxSize={"27px"}
                  color={btn_border_colors}
                ></Icon>
              </HStack>
            </Button>
            {!isLargerThan770 && (
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
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    as={RouterLink}
                    to={"/login"}
                  >
                    <Text color={btn_border_colors}>Login</Text>
                  </Link>
                  <Icon
                    as={MdLogin}
                    boxSize={"27px"}
                    color={btn_border_colors}
                  ></Icon>
                </HStack>
              </Button>
            )}
          </Stack>
        </Box>
      </Stack>

      <Box w={{ base: "full" }} my={10}>
        <Box as={motion.div} animation={bounce_animation}>
          <Center>
            <Image
              w={{ xs: "100%", sm: "80%", md: "70%" }}
              h={{ xs: "100%", sm: "80%", md: "70%" }}
              src="/media/landing-page/intro-photo.png"
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPageCore;
