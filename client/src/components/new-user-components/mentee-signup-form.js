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
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function MenteeSignUpForm() {
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

  const onSubmit = (data)  => {
    console.log(data)
    axios({
    method: 'post',
    url: "/register/mentee-profile",
    data: data,
    }).then((response) => {
      console.log("success", response)
    })

  }
  console.log(errors);

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
            id={"mentee_email"}
            type="text"
            {...register("mentee_email", { required: true })}
          />
          {errors.mentee_email && (
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
              University Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            {...register("mentee_university", {
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
              What year are you in?
            </Text>
          </FormLabel>
          <Select
            isRequired
            variant="outline"
            {...register("mentee_year", { required: true })}
          >
            <option value="1">Year 1 (Freshman)</option>
            <option value="2">Year 2 (Sophomore)</option>
            <option value="3">Year 3 (Junior)</option>
            <option value="4">Year 4 (Senior)</option>
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
            {...register("mentee_language", { required: true })}
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
          <Textarea {...register("mentee_about", { required: true })} />
        </FormControl> */}

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              What are your career goals and aspirations?
            </Text>
          </FormLabel>
          <Textarea {...register("mentee_career_goals", { required: true })} />
        </FormControl>

        <FormControl my={7}>
          <FormLabel>
            <Text
              fontSize={"md"}
              fontWeight={"extrabold"}
              textTransform={"uppercase"}
            >
              What are you looking for in a mentor?
            </Text>
          </FormLabel>
          <Select
            {...register("mentee_topic", { required: true })}
          >
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
          <Textarea {...register("mentee_etc_info", {})} />
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
            <Heading
              fontWeight={"bold"}
              size={"sm"}
              textTransform={"uppercase"}
            >
              {"CREATE"}
            </Heading>
          </Button>
        </Center>
      </form>
    </Box>
  );
}
