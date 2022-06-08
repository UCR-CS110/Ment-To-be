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
  Text,
  useColorModeValue,
  Spacer,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Select,
  Textarea,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Link,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrophy} from "react-icons/fa";
import { BsBoxArrowInUpRight, BsSkipForwardCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: is_edit_open,
    onOpen: on_edit_open,
    onClose: on_edit_close,
  } = useDisclosure();
  const {
    isOpen: is_drawer_open,
    onOpen: on_drawer_open,
    onClose: on_drawer_close,
  } = useDisclosure();

  const btnRef = React.useRef()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          title: "Profile created.",
          description: "We've created a mentee profile for you!",
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
                {mentee.mentee_profile.mentee_topic}
              </Text>
            </Stack>
          </Box>
        </Flex>

        <HStack>
          <Box align={"left"} mt={3}>
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
              padding={"8px 10px "}
              transition={"all .2s ease"}
              transition-timing-function="spring(4 100 10 10)"
              _hover={{
                transform: "translateY(-3px)",
                shadow: "lg",
              }}
              boxShadow={"lg"}
              color={text_colors}
              bg={btn_bg_colors}
              onClick={on_edit_open}
            >
              {/* <HStack> */}
                {/* <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  textTransform={"uppercase"}
                  color={btn_text_colors}
                >
                  {"Edit"}
                </Text> */}
                <Icon
                  alignContent={"center"}
                  as={FaUserEdit}
                  boxSize={"18px"}
                  color={btn_text_colors}
                />
              {/* </HStack> */}
            </Button>
          </Box>

        <Spacer></Spacer>
          <Box>
            <Button 
              mt={3}
              alignItems={"center"}
              backgroundColor={"transparent"}
              transition={"all .2s ease"}
              transition-timing-function="spring(4 100 10 10)"
              _hover={{
                transform: "translateY(-2px)",
                shadow: "lg",
              }}
              ref={btnRef}
              onClick={on_drawer_open}
              >
                <Icon
                      alignContent={"center"}
                      as={BsBoxArrowInUpRight}
                      boxSize={"18px"}
                      color={text_colors}
                />
              </Button>
              <Drawer
                isOpen={is_drawer_open}
                placement='right'
                onClose={on_drawer_open}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <CloseButton onClick={on_drawer_close} />
                  <DrawerBody>
                    <Flex
                      bg={box_bg_colors}
                      p={7}
                      borderRadius={"sm"}
                      boxShadow={"lg"}
                      maxW={"sm"}
                      w={is_larger_than_md ? "none" : "310px"}
                      height={"970px"}
                      align={"center"}
                    >
                      <Flex direction={"column"} mt={-200}>
                        <Box>
                          <Box>
                            <VStack>
                              <Center mb={3}>
                                <Box
                                  border={"5px solid"}
                                  borderRadius={"500px"}
                                  borderColor={"transparent"}
                                  background={
                                    "radial-gradient(circle,#484E7E 0%, #2F99C3 100%)"
                                  }
                                  boxSize={"100%"}
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
                
                              <Heading
                                fontSize={"2xl"}
                                w="full"
                                color={highlight_text_colors}
                                fontWeight="bold"
                                textTransform={"uppercase"}
                                pb={3}
                                // verticalAlign="middle"
                                lineHeight={"10"}
                              > Yenna Chang 
                              <Text
                                fontSize={"2xl"}
                                color={text_colors}
                                textTransform={"uppercase"}
                              >
                                {mentee.mentee_profile.mentee_name}
                              </Text>
                              <Center>
                              <Text
                                fontSize={"md"}
                                color={text_colors}
                                textTransform={"uppercase"}
                                fontWeight={"medium"}
                              >
                                {mentee.mentee_profile.mentee_university}
                                {" - "}
                                {mentee.mentee_profile.mentee_year !== "none" &&
                                  mentee.mentee_profile.mentee_year}
                              </Text>
                              </Center>
                              </Heading>

                            </VStack>
                          </Box>
                        </Box>

                        <Flex align={"left"} direction={"column"} mt={-2}>
                          <Box my={2}>
                            <Stack>
                              <Heading
                                color={text_colors}
                                fontSize={"md"}
                                fontWeight={"extrabold"}
                                textTransform={"uppercase"}
                              >
                                Bio
                              </Heading>
                              <Text
                                fontSize={"md"}
                                color={text_colors}
                              >
                                {/* {mentee.mentee_profile.mentee_email} */}
                                Hello! My name is Yenna.
                              </Text>
                            </Stack>
                          </Box>

                          <Heading
                            color={text_colors}
                            fontSize={"md"}
                            fontWeight={"extrabold"}
                            textTransform={"uppercase"}
                            mt={3}
                          >
                            Endorsements
                          </Heading>

                          <Center>
                          <HStack mt={3} spacing='4px'>
                            
                          <Box
                            w={"70px"}
                            bg={"white"}
                            borderRadius={"5px"}
                            pb={3}
                            >
                              <VStack>
                                <Icon
                                  mt={3}
                                  color={'yellow.400'}
                                  fontSize={"170%"}
                                  alignContent={"center"}
                                  as={FaTrophy}
                                />
                                <Text
                                  fontSize={"xs"}
                                  textAlign={"center"}
                                  color={'black'}
                                  fontWeight={"bold"}
                                >
                                  Personal Connection
                                </Text>
                                <Box
                                bg={'gray.100'}
                                w={"50px"}
                                borderRadius={"10px"}
                                >
                                  <Text
                                    fontSize={"xs"}
                                    textAlign={"center"}
                                    color={'green'}
                                    fontWeight={"bold"}
                                  >
                                    2
                                </Text>
                              </Box>
                              </VStack>
                            </Box>

                            <Box
                            w={"70px"}
                            bg={"white"}
                            borderRadius={"5px"}
                            pb={3}
                            >
                              <VStack>
                                <Icon
                                  mt={3}
                                  color={'yellow.400'}
                                  fontSize={"170%"}
                                  alignContent={"center"}
                                  as={FaTrophy}
                                />
                                <Text
                                  fontSize={"xs"}
                                  textAlign={"center"}
                                  color={'black'}
                                  fontWeight={"bold"}
                                >
                                  Mutual Respect
                                  </Text>
                                <Box
                                bg={'gray.100'}
                                w={"50px"}
                                borderRadius={"10px"}
                                >
                                  <Text
                                    fontSize={"xs"}
                                    textAlign={"center"}
                                    color={'green'}
                                    fontWeight={"bold"}
                                  >
                                    2
                                </Text>
                                </Box>

                              </VStack>
                            </Box>
                            <Box
                            w={"70px"}
                            bg={"white"}
                            borderRadius={"5px"}
                            pb={3}
                            >
                              <VStack>
                                <Icon
                                  mt={3}
                                  color={'yellow.400'}
                                  fontSize={"170%"}
                                  alignContent={"center"}
                                  as={FaTrophy}
                                />
                                <Text
                                  fontSize={"xs"}
                                  textAlign={"center"}
                                  color={'black'}
                                  fontWeight={"bold"}
                                >
                                  Active Listening
                                  </Text>
                                <Box
                                bg={'gray.100'}
                                w={"50px"}
                                borderRadius={"10px"}
                                >
                                  <Text
                                    fontSize={"xs"}
                                    textAlign={"center"}
                                    color={'green'}
                                    fontWeight={"bold"}
                                  >
                                    6
                                </Text>
                                </Box>
                              </VStack>
                            </Box>

                          </HStack>
                          </Center>
              
                          {/* <Center>
                          <Link href={"mailto:" + mentee.mentee_profile.mentee_email} target="_blank" passHref>
                            <Button
                              leftIcon={<MdEmail></MdEmail>}
                              as="a"
                              variant="outline"
                              mt={10}
                              alignItems="center"
                              w={{ base: "full", sm: "auto" }}
                              size={btn_size}
                              cursor="pointer"
                              border={"3px solid"}
                              borderRadius={"6px"}
                              textTransform={"uppercase"}
                              transition={"all .5s ease"}
                              color={btn_text_colors}
                              bg={btn_bg_colors}
                              _hover={{ bg: btn_hover_colors }}
                            >
                              <Text fontSize={btn_size}>email</Text>
                            </Button>
                          </Link>
                          </Center> */}

                        </Flex>
                      </Flex>
                    </Flex>
                  </DrawerBody>

                  <DrawerFooter>

                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Box>
          </HStack>

          {/* EDIT MODAL  */}
          <Modal isOpen={is_edit_open} onClose={on_edit_close}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Profile</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
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
                  {/* <Input
                    id={"mentee_email"}
                    type="text"
                    {...register("mentee_email", { required: true })}
                    placeholder={mentee.mentee_profile.mentee_email}
                  /> */}
                  <Editable defaultValue={mentee.mentee_profile.mentee_email}>
                  <EditablePreview />
                  <EditableInput />
                  </Editable>
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
                  {/* <Input
                    type="text"
                    {...register("mentee_university", {
                      required: true,
                      maxLength: 80,
                    })}
                    placeholder={mentee.mentee_profile.mentee_university}
                  /> */}
                  <Editable defaultValue={mentee.mentee_profile.mentee_university}>
                  <EditablePreview />
                  <EditableInput />
                  </Editable>
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
                    <option value="Year 1">Year 1 (Freshman)</option>
                    <option value="Year 2">Year 2 (Sophomore)</option>
                    <option value="Year 3">Year 3 (Junior)</option>
                    <option value="Year 4">Year 4 (Senior)</option>
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
                  {/* <Textarea {...register("mentee_career_goals", { required: true })} /> */}
                  <Editable defaultValue={"NEEDS CAREER_GOALS VARIABLE"}>
                  <EditablePreview />
                  <EditableTextarea />
                  </Editable>
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
                  <Select {...register("mentee_topic", { required: true })}>
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
                </form>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={on_edit_close}>
                  DONE
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
      </Flex>
    </Flex>
  );
}

export default MenteeProfileCard;
