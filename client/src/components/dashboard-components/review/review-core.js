import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHandPointRight } from "react-icons/fa";

function ReviewCore({ mentee }) {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.900", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      height={{ sm: "fit-content", md: "fit-content", lg: "lg" }}
    >
      <VStack>
        <Box>
          <Heading fontSize="2xl" my={1} lineHeight={10} color={text_colors}>
            How was your experience with your mentor?
          </Heading>
        </Box>
        <Button
          my={5}
          variant="outline"
          alignItems="center"
          justifyContent="center"
          w={{ base: "full", sm: "auto" }}
          size="lg"
          cursor="pointer"
          border={"3px solid"}
          borderRadius={"6px"}
          borderColor={btn_border_colors}
          textTransform={"uppercase"}
          padding={"16px 36px "}
          transition={"all .5s ease"}
          _hover={{ bg: btn_bg_colors }}
          boxShadow={"lg"}
          color={text_colors}
        >
          <HStack>
            <Icon as={FaRegHandPointRight} boxSize={"25px"} />
            <Heading
              fontWeight={"bold"}
              size={"sm"}
              textTransform={"uppercase"}
            >
              {"provide feedback"}
            </Heading>
          </HStack>
        </Button>
        <Box>
          <Image
            mt={-5}
            p={-3}
            backgroundColor="transparent"
            src={"/media/dashboard/review/review-img.svg"}
            w={"260px"}
          ></Image>
        </Box>
        <Box></Box>
      </VStack>
    </Flex>
  );
}

export default ReviewCore;
