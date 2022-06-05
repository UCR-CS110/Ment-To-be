import {
  HStack,
  Icon,
  Heading,
  Button,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
function GoogleAuthentication() {
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.900");
  const text_colors = useColorModeValue("light.1000", "light.1000");

  return (
    <Flex>
      <Link href="http://localhost:3001/auth/google" _hover={"none"}>
        <Button
          variant="outline"
          target="_blank"
          alignItems="center"
          w={{ base: "full", sm: "auto" }}
          size="lg"
          cursor="pointer"
          border={"3px solid"}
          borderRadius={"6px"}
          borderColor={btn_border_colors}
          textTransform={"uppercase"}
          transition={"all .5s ease"}
          _hover={{ bg: btn_bg_colors }}
        >
          <HStack>
            <Icon alignContent={"center"} as={FcGoogle} boxSize={"20px"} />
            <Text
              fontSize={"lg"}
              color={text_colors}
              textTransform={"uppercase"}
            >
              {"Login with Google"}
            </Text>
          </HStack>
        </Button>
      </Link>
    </Flex>
  );
}
export default GoogleAuthentication;
