import {
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  useMediaQuery,
  Box,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function AboutUsContact({ email, gh_link, linkedin_link }) {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  const btn_size = is_larger_than_md ? "lg" : "lg";
  const btn_text_colors = useColorModeValue("light.900", "dark.100");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");

  return (
    <Box mb={10}>
      <Flex px={3}>
        <Stack
          direction={is_larger_than_md ? "row" : "column"}
          spacing={is_larger_than_md ? "5" : "5"}
        >
          <Link href={"mailto:" + email} target="_blank" passHref>
            <Button
              leftIcon={<MdEmail></MdEmail>}
              as="a"
              variant="outline"
              alignItems="center"
              w={{ base: "full", sm: "auto" }}
              size={btn_size}
              cursor="pointer"
              border={"3px solid"}
              color={btn_text_colors}
              borderRadius={"6px"}
              borderColor={btn_border_colors}
              textTransform={"uppercase"}
              transition={"all .5s ease"}
              _hover={{ bg: btn_hover_colors }}
            >
              <Text fontSize={btn_size}>email</Text>
            </Button>
          </Link>

          <Link href={linkedin_link} target="_blank" passHref>
            <Button
              leftIcon={<FaLinkedinIn></FaLinkedinIn>}
              as="a"
              variant="outline"
              alignItems="center"
              w={{ base: "full", sm: "auto" }}
              size={btn_size}
              cursor="pointer"
              border={"3px solid"}
              color={btn_text_colors}
              borderRadius={"6px"}
              borderColor={btn_border_colors}
              textTransform={"uppercase"}
              transition={"all .5s ease"}
              _hover={{ bg: btn_hover_colors }}
            >
              <Text fontSize={btn_size}>LinkedIn</Text>
            </Button>
          </Link>

          <Link href={gh_link} target="_blank" passHref>
            <Button
              leftIcon={<FaGithubAlt></FaGithubAlt>}
              as="a"
              variant="outline"
              alignItems="center"
              w={{ base: "full", sm: "auto" }}
              size={btn_size}
              cursor="pointer"
              border={"3px solid"}
              color={btn_text_colors}
              borderRadius={"6px"}
              borderColor={btn_border_colors}
              textTransform={"uppercase"}
              transition={"all .5s ease"}
              _hover={{ bg: btn_hover_colors }}
            >
              <Text fontSize={btn_size}>GitHub</Text>
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
export default AboutUsContact;
