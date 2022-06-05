import ActionButton from "../action-button";
import {
  Box,
  Heading,
  Stack,
  Center,
  Text,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function LandingPageFooter() {
  return (
    <>
      <Center>
        <ActionButton mt={3}>
          <Link as={RouterLink} to={"/about-us"} _hover={"none"}>
            <Text fontWeight="bold" size="md">
              {"learn more about the team →"}
            </Text>
          </Link>
        </ActionButton>
      </Center>
    </>
  );
}

export default LandingPageFooter;
