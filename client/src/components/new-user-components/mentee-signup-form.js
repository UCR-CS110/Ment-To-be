import {
  Box, FormControl,
  FormLabel, Heading, Input, Select, Text, Textarea, Button, Checkbox, useColorModeValue, Center
} from "@chakra-ui/react";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MenteeSignUpForm() {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Center>
      <Box maxW={"3xl"} align={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"} fontWeight={"extrabold"} textTransform={"uppercase"}>email</Text>
            </FormLabel>
            <Input type="text"  {...register("Email", { required: true })} />
          </FormControl>

          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"} fontWeight={"extrabold"} textTransform={"uppercase"}>University Name</Text>
            </FormLabel>
            <Input type="text" {...register("University Name", { required: true, maxLength: 80 })} />
          </FormControl>


          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"} fontWeight={"extrabold"} textTransform={"uppercase"}>Your Language Preference?</Text>
            </FormLabel>
            <Select isRequired variant='outline' {...register("Your Language Preference?", { required: true })}>
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

          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"} fontWeight={"extrabold"} textTransform={"uppercase"}>Tell me about yourself</Text>
            </FormLabel>
            <Textarea {...register("Tell me about yourself.", { required: true })} />
          </FormControl>


          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"} fontWeight={"extrabold"}textTransform={"uppercase"}>What are your career goals and aspirations?</Text>
            </FormLabel>
            <Textarea {...register("What are your career goals and aspirations?", { required: true })} />
          </FormControl>

          <FormControl my={7}>
            <FormLabel>
              <Text fontSize={"md"}  fontWeight={"extrabold"}textTransform={"uppercase"}>What are you looking for in a mentor?</Text>
            </FormLabel>
            <Select {...register("What are you looking for in a mentor?", { required: true })}>
              <option value="Discussing general career advice">Discussing general career advice</option>
              <option value="Exploring career pathways in tech">Exploring career pathways in tech</option>
              <option value="Improving programming skills in one or more technical languages">Improving programming skills in one or more technical languages</option>
              <option value="Obtaining an internship">Obtaining an internship</option>
            </Select>
          </FormControl>



          <FormControl my={7}>
            <FormLabel>
              <Text fontWeight={"extrabold"} fontSize={"md"} textTransform={"uppercase"}>Anything else you would like us to know about?</Text>
            </FormLabel>
            <Textarea {...register("Anything else you want us to know about?", {})} />
          </FormControl>


          <Button
            my={3}
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
            boxShadow={"sm"}
            color={text_colors}
            type={"submit"}
          >
            <Heading
              fontWeight={"bold"}
              size={"sm"}
              textTransform={"uppercase"}
            >
              {"done!"}
            </Heading>
          </Button>



        </form>
      </Box>
    </Center>
  );
}