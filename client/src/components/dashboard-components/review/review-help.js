import {
  Box,
  Button, Collapse, Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

function ReviewHelp() {
    const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.900", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
    const help_bg_colors = useColorModeValue("light.1000", "dark.300");
  const help_text_colors = useColorModeValue("light.100", "light.1000");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box align={"center"}>
      <Button
        variant="outline"
        w={{ base: "full", sm: "auto" }}
        size="md"
        cursor="pointer"
        border={"3px solid"}
        borderRadius={"6px"}
        borderColor={btn_border_colors}
        textTransform={"uppercase"}
        transition={"all .5s ease"}
        _hover={{ bg: btn_bg_colors }}
        position={"relative"}
        onClick={onToggle}
      >
        <Text fontSize={"md"} color={btn_border_colors}>
          What are endorsements?
        </Text>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p={7}
          maxW={"lg"}
          bg={help_bg_colors}
          color={help_text_colors}
          mt="4"
          rounded="md"
          shadow="lg"
        >
          <Text fontSize={"lg"} textAlign={"left"} fontWeight={"bold"}>
            {
              "Endorsements are a way for you to thank your mentor for taking time out of their day to meet with you. Let us know what they did well, and we'll be sure to relay your message!"
            }
          </Text> 
        </Box>
      </Collapse>
    </Box>
  );
}

export default ReviewHelp;
