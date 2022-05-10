import {
  useColorModeValue,
  useDisclosure,
  Flex,
  chakra,
  HStack,
  VStack,
  Box,
  IconButton,
  CloseButton,
  Button,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ButtonLink({ button_text, website }) {
  return (
    <Button variant="ghost">
      <Link px={2} py={1} rounded={"md"} as={RouterLink} to={website}>
        <Text>{button_text}</Text>
      </Link>
    </Button>
  );
}
