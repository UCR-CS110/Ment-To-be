import {
  Flex,
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Image,
  useColorModeValue,
  Heading,
  Button,
  Icon,
  IconButton,
  chakra,
} from "@chakra-ui/react";

import { FaRegHandPointRight } from "react-icons/fa";

function NoProfileCard({ mentee, mentor }) {
  const box_bg_colors = useColorModeValue("light.100", "dark.200");
  const text_colors = useColorModeValue("light.900", "dark.900");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.900");
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );
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
          {mentee && !mentor && (
            <Heading fontSize="2xl" my={1} lineHeight={10} color={text_colors}>
              Looking for mentorship? Create your
              <Heading
                display={"inline"}
                fontSize="2xl"
                w="full"
                bgClip="text"
                bgGradient={highlight_font_gradient}
                fontWeight="bold"
                textTransform={"uppercase"}
                textDecoration={"underline"}
              >
                {" "}
                Mentee{" "}
              </Heading>
              profile.
            </Heading>
          )}
          {!mentee && mentor && (
            <Heading fontSize="2xl" my={1} lineHeight={10} color={text_colors}>
              Spread your wisdom, match with mentees. Create a
              <Heading
                display={"inline"}
                fontSize="2xl"
                w="full"
                bgClip="text"
                bgGradient={highlight_font_gradient}
                fontWeight="bold"
                textTransform={"uppercase"}
                textDecoration={"underline"}
              >
                {" "}
                Mentor{" "}
              </Heading>
              profile.
            </Heading>
          )}
        </Box>
        <Box>
          <Image
            my={3}
            backgroundColor="transparent"
            src={"/media/dashboard/no-profile-img.svg"}
            w={"400px"}
            h={"100%"}
          ></Image>
        </Box>
        <Box>
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
                {"get started"}
              </Heading>
            </HStack>
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}

export default NoProfileCard;
