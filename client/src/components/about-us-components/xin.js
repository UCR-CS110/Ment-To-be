import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

function AboutMeContact() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <HStack spacing={3} my={2}>
        <Link href="https://www.linkedin.com/in/xinwng" passHref>
          <Button
            leftIcon={<FaLinkedinIn></FaLinkedinIn>}
            as="a"
            target="_blank"
            variant="outline"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            size="md"
            cursor="pointer"
            border={"2px solid"}
            borderRadius={"6px"}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_bg_colors }}
          >
            <Text fontSize={"sm"}>LinkedIn</Text>
          </Button>
        </Link>

        <Link href="https://www.github.com/xinwng" passHref>
          <Button
            leftIcon={<FaGithubAlt></FaGithubAlt>}
            as={"a"}
            variant="outline"
            target="_blank"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            size="md"
            cursor="pointer"
            border={"2px solid"}
            borderRadius={"6px"}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_bg_colors }}
          >
            <Text fontSize={"sm"}>GitHub</Text>
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
export default function Xin() {
  return (
    <HStack mt={5}>
      <Flex>
        <HStack>
          <Image
            src="/media/about-us/xin.jpg"
            alt="Profile Picture"
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="sm"
            width="110px"
            height="110px"
            my="auto"
            mx="auto"
          />

          <Box pl={5}>
            <VStack>
              <Heading fontSize="3xl" fontWeight="bold">
                Xin Wang
              </Heading>
              <AboutMeContact></AboutMeContact>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </HStack>
  );
}
