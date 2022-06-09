import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  Button,
  Checkbox,
  useColorModeValue,
  Center,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function MentorSignUpForm() {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //     fetch(URL, {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //     )
  // }
  const toast = useToast();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "/register/mentor-profile",
      data: data,
    }).then((response) => {
      if (response.status === 200) {
        console.log("success", response);
        toast({
          title: "Profile created.",
          description: "We've created a mentor profile for you!",
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
    <Box w={"auto"} align={"left"} px={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              email
            </Text>
          </FormLabel>
          <Input
            id={"mentor_email"}
            type="text"
            {...register("mentor_email", { required: true })}
          />
          {errors.mentor_email && (
            <span role="alert">
              <Text
                fontSize={"sm"}
                textAlign={"left"}
                mt={1}
                mb={3}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                Invalid submission *
              </Text>
            </span>
          )}
        </FormControl>

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              Most Recent University Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            {...register("mentor_university", {
              required: true,
              maxLength: 80,
            })}
          />
        </FormControl>

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              What is degree did you earn?
            </Text>
          </FormLabel>
          <Select
            isRequired
            variant="outline"
            {...register("mentor_degree", { required: true })}
          >
            <option value="Associate's Degree">Associate Degree (A.S)</option>
            <option value="Bachelor's Degree">Bachelor Degree (B.A./B.S)</option>
            <option value="Master's Degree">Master Degree (M.A./M.S)</option>
            <option value="Doctoral Degree">Doctoral Degree (PhD)</option>
            <option value="none">Does not apply</option>
          </Select>
        </FormControl>
        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              Your Language Preference?
            </Text>
          </FormLabel>
          <Select
            isRequired
            variant="outline"
            {...register("mentor_language", { required: true })}
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Bengali">Bengali</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Hindi">Hindi</option>
            <option value="Urdu">Urdu</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </Select>
        </FormControl>

        {/* <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              Tell me about yourself
            </Text>
          </FormLabel>
          <Textarea {...register("mentor_about", { required: true })} />
        </FormControl> */}

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              Tell us about some of your jobs/internships/experience
            </Text>
          </FormLabel>
          <Textarea {...register("mentor_career_goals", { required: true })} />
        </FormControl>

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              What do you want to discuss with your mentees?
            </Text>
          </FormLabel>
          <Select {...register("mentor_topic", { required: true })}>
            <option value="career_advice">
              Discussing general career advice
            </option>
            <option value="pathways_in_tech">
              Exploring career pathways in tech
            </option>
            <option value="programming_skills">
              Improving programming skills in one or more technical languages
            </option>
            <option value="internship">Obtaining an internship</option>
          </Select>
        </FormControl>

        {/* <FormControl my={7}>
          <FormLabel>
            <Text
              fontWeight={"extrabold"}
              fontSize={"md"}
              textTransform={"uppercase"}
            >
              Anything else you would like us to know about?
            </Text>
          </FormLabel>
          <Textarea {...register("mentor_etc_info", {})} />
        </FormControl> */}

        <Center>
          <Button
            my={3}
            align={"right"}
            variant="outline"
            w={{ base: "full", sm: "auto" }}
            size="lg"
            cursor="pointer"
            border={"3px solid"}
            borderRadius={"6px"}
            borderColor={btn_border_colors}
            textTransform={"uppercase"}
            transition={"all .5s ease"}
            _hover={{ bg: btn_bg_colors }}
            boxShadow={"sm"}
            color={text_colors}
            type={"submit"}
          >
            <Text fontWeight={"bold"} size={"sm"} textTransform={"uppercase"}>
              {"CREATE"}
            </Text>
          </Button>
        </Center>
      </form>
    </Box>
  );
}
