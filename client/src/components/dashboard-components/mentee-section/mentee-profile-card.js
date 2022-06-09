import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Spacer,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrophy} from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons'
import MenteeEditForm from "./mentee-edit-profile-form";
import ProfileDrawer from "./profile-drawer";


function MenteeProfileCard({ mentee }) {
  const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
  const box_bg_colors = useColorModeValue("#f4effc", "#242629");
  const text_colors = useColorModeValue("light.1000", "#fff3ec");
  const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
  const btn_bg_colors = useColorModeValue("#484E7E", "#fffffe");
  const btn_text_colors = useColorModeValue("dark.100", "dark.900");
  const btn_size = is_larger_than_md ? "lg" : "lg";
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const btn_hover_colors = useColorModeValue("light.400", "dark.300");

  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );


  const toast = useToast();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "/register/mentee-profile",
      data: data,
    }).then((response) => {
      if (response.status === 200) {
        console.log("success", response);
        toast({
          title: "Profile updated.",
          description: "We've saved your changes.",
          status: "success",
          variant: "subtle",
          duration: 9000,
          isClosable: true,
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Something went wrong.",
          description: "Try again later.",
          status: "error",
          variant: "subtle",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      w={is_larger_than_md ? "none" : "310px"}
      height={{ sm: "fit-content", md: "570px", lg: "570px" }}
      align={"center"}
    >
      <Flex direction={"column"} mt={5}>
        <Box>
          <Box>
            <Stack direction={is_larger_than_md ? "row" : "column"}>
              {!is_larger_than_md && (
                <Center mb={3}>
                  <Box
                    border={"5px solid"}
                    borderRadius={"500px"}
                    borderColor={"transparent"}
                    background={
                      "radial-gradient(circle,#484E7E 0%, #2F99C3 100%)"
                    }
                    boxSize={"50%"}
                    boxShadow={"xl"}
                  >
                    <Image
                      backgroundColor="transparent"
                      src={mentee.picture}
                      clipPath={"circle()"}
                      w={"100%"}
                      h={"100%"}
                    ></Image>
                  </Box>
                </Center>
              )}

              <Heading
                align={is_larger_than_md ? "left" : "center"}
                fontSize={"3xl"}
                w="full"
                color={highlight_text_colors}
                fontWeight="bold"
                textTransform={"uppercase"}
                pb={3}
                verticalAlign="middle"
                lineHeight={"10"}
              >
                Your Mentee Profile
              </Heading>
              <Spacer></Spacer>
              {is_larger_than_md && (
                <Box
                  border={"5px solid"}
                  borderRadius={"500px"}
                  borderColor={"transparent"}
                  background={
                    "radial-gradient(circle,#484E7E 0%, #2F99C3 100%)"
                  }
                  boxSize={"60%"}
                  justify={"center"}
                >
                  {is_larger_than_md && (
                    <Image
                      justify={"center"}
                      backgroundColor="transparent"
                      src={mentee.picture}
                      clipPath={"circle()"}
                      w={"100%"}
                      h={"100%"}
                    ></Image>
                  )}
                </Box>
              )}
            </Stack>
          </Box>
        </Box>
        <Flex align={"left"} direction={"column"} mt={3}>
          <Box my={2}>
            <Stack>
              <Heading
                color={text_colors}
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                Email
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_email}
              </Text>
            </Stack>
          </Box>
          <Box my={2}>
            <Stack>
              <Heading
                color={text_colors}
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                {"University & Year"}
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_university}
                {" - "}
                {mentee.mentee_profile.mentee_year !== "none" &&
                  mentee.mentee_profile.mentee_year}
              </Text>
            </Stack>
          </Box>
          <Box my={2}>
            <Stack>
              <Heading
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
                color={text_colors}
              >
                Preferred Language
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {mentee.mentee_profile.mentee_language}
              </Text>
            </Stack>
          </Box>
          <Box my={2}>
            <Stack>
              <Heading
                fontSize={"md"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
                color={text_colors}
              >
                Guidance Topic
              </Heading>
              <Text
                fontSize={"md"}
                color={text_colors}
                textTransform={"uppercase"}
              >
                {(() => {
                  switch (mentee.mentee_profile.mentee_topic) {
                    case "career_advice":   return "Discussing general career advice";
                    case "pathways_in_tech": return "Exploring career pathways in tech";
                    case "programming_skills":  return "Improving programming skills in one or more technical languages";
                    case "internship":  return "Obtaining an internship";
                    default:      return "";
                  }
                })()}
              </Text>
            </Stack>
          </Box>
        </Flex>
        <HStack>
          <Box align={"left"} mt={3}>
            <MenteeEditForm mentee={mentee}></MenteeEditForm>
          </Box>
        <Spacer></Spacer>
          <Box>
            <ProfileDrawer mentee={mentee}></ProfileDrawer>
            </Box>
          </HStack>
      </Flex>
    </Flex>
  );
}

export default MenteeProfileCard;
