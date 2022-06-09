import { Button, Link, Text, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ButtonLink({
  button_text,
  website,
  bg_color,
  font_color,
}) {
  return (
    <Button variant="solid" bg={bg_color ? bg_color : ""}>
      <Link px={2} py={1} rounded={"md"} as={RouterLink} to={website}>
        <Text color={font_color}>{button_text}</Text>
      </Link>
    </Button>
  );
}
