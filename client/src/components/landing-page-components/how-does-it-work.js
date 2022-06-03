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

function HowDoesItWorkCardTemplate({ header, header_icon, body, ...rest }) {
  const box_bg_colors = useColorModeValue("light.300", "dark.300");
  const box_header_colors = useColorModeValue("light.900", "dark.800");
  const text_colors = useColorModeValue("light.1000", "dark.900");
  return (
    <Box
      bg={box_bg_colors}
      p={9}
      borderRadius={"sm"}
      boxShadow={"lg"}
      w={{ xs: "fit-content" }}
      h={{ xs: "fit-content", lg: "650px" }}
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
              h={"100px"}
              w={"100px"}
            ></Image>
          </Center>
        </Box>

        <Heading fontSize="4xl" my={1} color={text_colors}>
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
  return (
    <Flex alignItems={"center"} justifyContent={"space-evenly"}>
      <Stack gap={5} direction={{ xs: "column", lg: "row" }} overflow={"auto"}>
        <HowDoesItWorkCardTemplate
          header={"Match"}
          header_icon={"/media/landing-page/how-does-it-work/match.png"}
          body={
            "Professionals (mentors) that wish to provide their knowledge in guiding students into the industry can sign up to volunteer by joining our community. Students (mentees) who are looking for guidance wait for a match to occur."
          }
        ></HowDoesItWorkCardTemplate>

        <HowDoesItWorkCardTemplate
          header={"Meet"}
          header_icon={"/media/landing-page/how-does-it-work/meet.png"}
          body={
            "Mentors meet with their matched mentees to provide information within a variety of fields throughout computer science: front-end, back-end, machine learning, and more. Mentees receive a more guided and clear path for their future and can inquire for any career advice they wish to gain from their mentor."
          }
        ></HowDoesItWorkCardTemplate>

        <HowDoesItWorkCardTemplate
          header={"Connect"}
          header_icon={"/media/landing-page/how-does-it-work/connect.png"}
          body={
            "Mentees can provide feedback for their session with their mentor. Mentors will receive badges for excellent feedback. Mentors and mentees can choose to further connect and maintain a relationship."
          }
        ></HowDoesItWorkCardTemplate>
      </Stack>
    </Flex>
  );
}

export default HowDoesItWork;
