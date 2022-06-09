import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Text,
    useColorModeValue,
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
    Editable,
    EditableInput,
    EditablePreview,
    useEditableControls,
    ButtonGroup,
    IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrophy} from "react-icons/fa";
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons'

function MenteeEditForm({ mentee }) {
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

    const [user, set_user] = useState({});
    useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
    set_user(data);
    });
    }, []);

    function EditableControls() {
        const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
        } = useEditableControls()

    return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
    ) : (
    <Flex justifyContent='center'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
    )
}

function refreshPage() {
    window.location.reload(false);
}

const {
    isOpen: is_edit_open,
    onOpen: on_edit_open,
    onClose: on_edit_close,
} = useDisclosure();

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
    <Box>
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
            <Icon
                alignContent={"center"}
                as={FaUserEdit}
                boxSize={"18px"}
                color={btn_text_colors}
            />
        </Button>

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
                    <Editable
                        defaultValue={mentee.mentee_profile.mentee_email}
                        isPreviewFocusable={false}
                    >
                        <HStack>
                        <EditablePreview 
                        fontSize={"md"}
                        />
                    
                        <Input 
                        id={"mentee_email"}
                        type="text"
                        {...register("mentee_email", { required: true })}
                        as={EditableInput} 
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
                        <EditableControls />
                        </HStack>
                    </Editable>

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
                    
                    <Editable
                        defaultValue={mentee.mentee_profile.mentee_university}
                        isPreviewFocusable={false}
                    >
                        <HStack>
                        <EditablePreview 
                        fontSize={"md"}
                        />
                        <Input 
                            type="text"
                            {...register("mentee_university", {
                            required: true,
                            maxLength: 80,
                            })}
                            as={EditableInput} 
                        />
                        <EditableControls />
                        </HStack>
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
                    <Editable
                        defaultValue={mentee.mentee_profile.mentee_career_goals}
                        isPreviewFocusable={false}
                    >
                        <HStack>
                        <EditablePreview 
                        fontSize={"md"}
                        />
                        <Input 
                        {...register("mentee_career_goals", { required: true })}
                        as={EditableInput} 
                        />
                        <EditableControls />
                        </HStack>
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
                        <ModalFooter>
                            <HStack>
                            <Button 
                                colorScheme='gray' mr={3} 
                                onClick={on_edit_close}
                                >
                                Cancel
                            </Button>
                            <Button 
                                colorScheme='blue' mr={3} 
                                onClick={() => refreshPage() && on_edit_close}
                                type={"submit"}
                            >
                            DONE
                            </Button>
                            </HStack>
                            </ModalFooter>
                        </form> 
                </ModalBody>
            </ModalContent> 
        </Modal>
    </Box>
    );
}

export default MenteeEditForm;
