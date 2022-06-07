import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const ActionButton = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      bg="transparent"
      fontSize="lg"
      size={"lg"}
      borderRadius="md"
      variant="link"
      pl={1}
      pr={5}
      py={3}
      w="min-content"
      border={"3px solid transparent"}
      color="trueGray.500"
      fontWeight="bold"
      transition="0.35s ease-out"
      textTransform={"uppercase"}
      _hover={{
        color: colorMode === "light" ? "trueGray.900" : "trueGray.100",
        border: "3px solid",
        pr: 3,
        pl: 3,
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
});

export default ActionButton;
