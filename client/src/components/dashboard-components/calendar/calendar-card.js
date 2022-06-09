import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Link,
  Text,
  useColorModeValue,
  Spacer,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsChatLeftDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import DatePicker from "./date-picker.tsx";
import react, { useState } from "react";

function CalendarCard() {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("#F9E6AD", "#800020");
  const text_colors = useColorModeValue("light.1000", "#fff3ec");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  const btn_bg_colors = useColorModeValue("#f9bc60", "#fffffe");
  const btn_text_colors = useColorModeValue("dark.900", "dark.900");

  const btn_hover_colors = useColorModeValue("#272343", "#e3f6f5");
  const btn_hover_colors_text = useColorModeValue("light.100", "dark.900");
  const btn_border_colors = useColorModeValue("light.1000", "dark.100");
  const input_border_color = useColorModeValue("light.1000", "#fffffe");

  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );

  const [dt1, set_dt1] = useState("");
  const [dt2, set_dt2] = useState("");
  const [dt3, set_dt3] = useState("");
  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      w={is_larger_than_md ? "none" : "310px"}
      height={{ sm: "fit-content", md: "570px", lg: "570px" }}
      overflow={"hidden"}
    >
      <Flex direction={"column"} mt={0}>
        <Box>
          <Heading
            align={"left"}
            fontSize="3xl"
            lineHeight={10}
            color={text_colors}
            textTransform={"uppercase"}
          >
            {"Select Date & Time"}
          </Heading>
        </Box>
        <Text align={"left"} fontSize="xl" color={text_colors}>
          {"Please choose 3 meeting times you are free to meet your mentor."}
        </Text>
        <Flex direction={"column"} my={3}>
          <Box my={1}>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
              my={1}
            >
              Preferred Meeting Time #1
            </Text>
            <DatePicker
              showTimeSelect
              dateFormat="MM/dd/yyyy @ h:mm aa"
              selectedDate={dt1}
              onChange={(d) => set_dt1(d)}
            />
          </Box>
          <Text
            my={1}
            fontSize={"md"}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
          >
            Preferred Meeting Time #2
          </Text>
          <DatePicker
            showTimeSelect
            dateFormat="MM/dd/yyyy @ h:mm aa"
            selectedDate={dt2}
            onChange={(d) => set_dt2(d)}
          />

          <Text
            my={1}
            fontSize={"md"}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
          >
            Preferred Meeting Time #3
          </Text>
          <DatePicker
            showTimeSelect
            dateFormat="MM/dd/yyyy @ h:mm aa"
            selectedDate={dt3}
            onChange={(d) => set_dt3(d)}
          />
        </Flex>
        {/* <Stack mt={8} mb={2}>
          <Image
            backgroundColor="transparent"
            src={"/media/dashboard/chatroom/chatroom-card-img.svg"}
            width={"auto"}
            height={"auto"}
          ></Image>
        </Stack> */}

        <Box align={"center"}>
          <Link rounded={"md"} href={"/chat"}>
            <Button
              variant="outline"
              alignItems="center"
              w={{ base: "full", sm: "auto" }}
              h={{ base: "full", lg: "auto" }}
              position={"relative"}
              size="xs"
              cursor="pointer"
              border={"3px solid"}
              borderRadius={"6px"}
              borderColor={"transparent"}
              textTransform={"uppercase"}
              padding={"10px 18px "}
              transition={"all .2s ease"}
              transition-timing-function="spring(4 100 10 10)"
              _hover={{
                transform: "translateY(-3px)",
                shadow: "lg",
              }}
              boxShadow={"lg"}
              color={text_colors}
              bg={btn_bg_colors}
            >
              <HStack>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  textTransform={"uppercase"}
                  color={btn_text_colors}
                >
                  {"Submit"}
                </Text>
                <Icon
                  alignContent={"center"}
                  as={BsChatLeftDots}
                  boxSize={"18px"}
                  color={btn_text_colors}
                />
              </HStack>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CalendarCard;
