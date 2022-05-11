import {
  Flex,
  Box,
  Button,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// import axios from "axios";
import { useEffect } from "react";

function GoogleAuthentication() {
  // const [auth, set_auth] = null;

  // useEffect(() => {
  //   axios.get("/auth/current-session").then(({ data }) => {
  //     setAuth(data);
  //   });
  // }, []);
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

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
          border={"2px solid"}
          borderRadius={"6px"}
          borderColor={btn_border_colors}
          textTransform={"uppercase"}
          transition={"all .5s ease"}
          _hover={{ bg: btn_bg_colors }}
        >
          <Text fontSize={"sm"}>Login with Google</Text>
        </Button>
      </Link>
    </Flex>
  );
}
export default GoogleAuthentication;
