import { Button, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

function GoogleAuthentication() {
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.900");

  return (
    <Flex>
      <Link href="http://localhost:3001/auth/google">
        <Button
          variant="outline"
          target="_blank"
          alignItems="center"
          w={{ base: "full", sm: "auto" }}
          size="md"
          cursor="pointer"
          border={"3px solid"}
          borderRadius={"6px"}
          borderColor={btn_border_colors}
          textTransform={"uppercase"}
          transition={"all .5s ease"}
          _hover={{ bg: btn_bg_colors }}
        >
          <Text fontSize={"md"} color={btn_border_colors}>
            Login with Google
          </Text>
        </Button>
      </Link>
    </Flex>
  );
}
export default GoogleAuthentication;
