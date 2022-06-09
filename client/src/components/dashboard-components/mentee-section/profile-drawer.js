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
    useEditableControls,
    ButtonGroup,
    IconButton,
} from "@chakra-ui/react";

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrophy} from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function ProfileDrawer({ mentee }) {
    const [is_larger_than_md] = useMediaQuery("(min-width: 769px)");
    const box_bg_colors = useColorModeValue("#f4effc", "#242629");
    const text_colors = useColorModeValue("light.1000", "#fff3ec");
    const highlight_text_colors = useColorModeValue("#001858", "#fffffe");
    const btn_bg_colors = useColorModeValue("#484E7E", "#fffffe");
    const btn_text_colors = useColorModeValue("dark.100", "dark.900");
    const btn_size = is_larger_than_md ? "lg" : "lg";
    const btn_border_colors = useColorModeValue("light.900", "dark.100");
    const btn_hover_colors = useColorModeValue("light.400", "dark.300");

    const {
        isOpen: is_drawer_open,
        onOpen: on_drawer_open,
        onClose: on_drawer_close,
      } = useDisclosure();

      const btnRef = React.useRef()

    return(
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
                            > 
                            {mentee.full_name}
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
                            Career Goals
                            </Heading>
                            <Text
                            fontSize={"md"}
                            color={text_colors}
                            >
                            {mentee.mentee_profile.mentee_career_goals}
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


                    </Flex>
                    </Flex>
                </Flex>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </Box>

    );

}

export default ProfileDrawer;