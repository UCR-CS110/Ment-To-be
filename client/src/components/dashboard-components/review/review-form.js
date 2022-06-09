import {
  Box,
  FormControl,
  Stack,
  FormLabel,
  Heading,
  Input,
  Icon,
  Select,
  Text,
  Textarea,
  Button,
  useColorModeValue,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Checkbox, CheckboxGroup, CustomCheckbox } from "@chakra-ui/checkbox";
import axios from "axios";
import ReviewHelp from "./review-help";
function CustomIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;

  const d = isIndeterminate
    ? "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z"
    : "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z";

  return (
    <Icon viewBox="0 0 16 14" {...rest}>
      <path fill="currentColor" d={d} />
    </Icon>
  );
}

export default function ReviewForm() {
  const box_bg_colors = useColorModeValue("#d9d4e7", "#0e172c");
  const text_colors = useColorModeValue("light.1000", "dark.100");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.100");
  const toast = useToast();
  const [endorsements, setEndorsements] = useState(0);
  const [auth, set_auth] = useState({});
  const endorsement_index_map = {
    "personal-connection": 0, 
    "mutual-respect" :1, 
    "active-listening": 2, 
    "realistic-expectations": 3
  }
  const onChange = e => {
    console.log(e)
    setEndorsements(e)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var arr = [0,0,0,0]
    for(var i = 0; i < endorsements.length; i++) {
      arr[endorsement_index_map[endorsements[i]]] += 1;
    }
    data.endorsements = arr;
    
    var email = auth.email;
    axios({
      method: "post",
      url: "/endorsements/" + email,
      data: data,
    }).then((response) => {
      if (response.status === 200) {
        console.log("success", response);
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

  console.log(errors);
  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      set_auth(data);
      console.log(auth);
    });
  }, []);
  return (
    <Center>
      <Box w={"3xl"} align={"center"}>
        <ReviewHelp></ReviewHelp>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl my={7}>
            <FormLabel>
              <Text
                fontSize={"lg"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                Endorsements
              </Text>
            </FormLabel>

            <CheckboxGroup onChange={onChange} colorScheme="yellow">
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <Checkbox  icon={<CustomIcon />} value="personal-connection">
                  Personal Connection
                </Checkbox>
                <Checkbox icon={<CustomIcon />} value="mutual-respect">
                  Mutual Respect
                </Checkbox>
                <Checkbox icon={<CustomIcon />} value="active-listening">
                  Active Listening
                </Checkbox>
                <Checkbox icon={<CustomIcon />} value="realistic-expectations">
                  Realistic Expectations
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl my={7}>
            <FormLabel>
              <Text
                fontSize={"lg"}
                fontWeight={"extrabold"}
                textTransform={"uppercase"}
              >
                Leave a compliment
              </Text>
            </FormLabel>
            <Textarea {...register("compliment", { required: true })} />
          </FormControl>

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
                {"Submit"}
              </Text>
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
}