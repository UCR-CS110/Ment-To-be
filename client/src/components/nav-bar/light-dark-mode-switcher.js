import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const LightDarkModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="md"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      _hover={{ color: "none" }}
      {...props}
    />
  );
};
