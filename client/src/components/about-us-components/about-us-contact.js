import {
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function AboutUsContact({ email, gh_link, linkedin_link }) {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  const btn_text_colors = useColorModeValue("light.100", "dark.900");
  const btn_border_colors = useColorModeValue("light.100", "dark.900");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex>
      <HStack spacing={3} my={2}>
        <Link href={"mailto:" + email} target="_blank" passHref>
          <Button
            leftIcon={<MdEmail></MdEmail>}
            as="a"
            variant="outline"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            size="md"
            cursor="pointer"
            border={"2px solid"}
            color={btn_text_colors}
            borderRadius={"6px"}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_hover_colors }}
          >
            <Text fontSize={"sm"}>email</Text>
          </Button>
        </Link>

        <Link href={linkedin_link} target="_blank" passHref>
          <Button
            leftIcon={<FaLinkedinIn></FaLinkedinIn>}
            as="a"
            variant="outline"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            size="md"
            cursor="pointer"
            border={"2px solid"}
            color={btn_text_colors}
            borderRadius={"6px"}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_hover_colors }}
          >
            <Text fontSize={"sm"}>LinkedIn</Text>
          </Button>
        </Link>

        <Link href={gh_link} target="_blank" passHref>
          <Button
            leftIcon={<FaGithubAlt></FaGithubAlt>}
            as={"a"}
            variant="outline"
            alignItems="center"
            w={{ base: "full", sm: "auto" }}
            size="md"
            cursor="pointer"
            border={"2px solid"}
            borderRadius={"6px"}
            color={btn_text_colors}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_hover_colors }}
          >
            <Text fontSize={"sm"}>GitHub</Text>
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
export default AboutUsContact;
