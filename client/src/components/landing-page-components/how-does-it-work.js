import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function HowDoesItWorkCardTemplate({
  header,
  header_icon,
  body,
  box_bg_colors,
  text_colors,
  ...rest
}) {
  const box_header_colors = useColorModeValue("light.400", "dark.300");
  return (
    <Box
      bg={box_bg_colors}
      p={9}
      borderRadius={"sm"}
      w={{ xs: "fit-content" }}
      h={{ xs: "fit-content", lg: "600px" }}
      transition="all 0.2s"
      transition-timing-function="spring(4 100 10 10)"
      _hover={{ transform: "translateY(-7px)", shadow: "lg" }}
    >
      <Flex direction={"column"}>
        <Box>
          <Center>
            <Image
              mx={3}
              mb={7}
              src={header_icon}
              alt={header}
              h={"85px"}
              w={"85px"}
            ></Image>
          </Center>
        </Box>

        <Heading fontSize="3xl" my={1} color={box_header_colors}>
          {header}
        </Heading>

        <Text fontSize="xl" lineHeight={"tall"} color={text_colors}>
          {body}
        </Text>
      </Flex>
    </Box>
  );
}

function HowDoesItWork() {
  const box_bg_colors = useColorModeValue("light.900", "dark.100");

  const box_font_colors = useColorModeValue("light.100", "dark.900");

  return (
    <Flex alignItems={"center"} justifyContent={"space-evenly"}>
      <Stack gap={5} direction={{ xs: "column", lg: "row" }} overflow={"auto"}>
        <HowDoesItWorkCardTemplate
          header={"Match"}
          header_icon={"/media/landing-page/how-does-it-work/match.png"}
          body={
            "Industry professionals (mentors) sign up for a volunteering service and provide their calendar schedule of available times. Students (mentees) also sign up and wait for a match to occur."
          }
          box_bg_colors={box_bg_colors}
          text_colors={box_font_colors}
        ></HowDoesItWorkCardTemplate>

        <HowDoesItWorkCardTemplate
          header={"Meet"}
          header_icon={"/media/landing-page/how-does-it-work/meet.png"}
          body={
            "Mentors can provide information to students in a variety of fields within computer science: front-end, back-end, machine learning, and more. Mentees receive a more guided and clear path for their future and can inquire for any career advice they wish to gain from their mentor."
          }
          box_bg_colors={box_bg_colors}
          text_colors={box_font_colors}
        ></HowDoesItWorkCardTemplate>

        <HowDoesItWorkCardTemplate
          header={"Connect"}
          header_icon={"/media/landing-page/how-does-it-work/connect.png"}
          body={
            "Mentees can provide feedback for their session with their mentor. Mentors will receive badges for excellent feedback. Mentors and mentees can choose to further connect and maintain a relationship."
          }
          box_bg_colors={box_bg_colors}
          text_colors={box_font_colors}
        ></HowDoesItWorkCardTemplate>
      </Stack>
    </Flex>
  );
}

export default HowDoesItWork;
