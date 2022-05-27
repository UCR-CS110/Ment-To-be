import React from "react";
import {
    Box,
    Heading,
    Button,
    Flex,
    Stack,
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
    useColorModeValue,
    VStack,
    Image,
} from "@chakra-ui/react";


function LoginWelcome() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const btn_colors = useColorModeValue("light.200", "dark.100");
    const btn_text_colors = useColorModeValue("light.900", "dark.900");
    const btn_hover_colors = useColorModeValue("light.400", "dark.300");


    return (
    <Flex alignItems={"center"}>
        <VStack spacing={35}>
        <Box mt={70}>
          <Heading fontSize={"5xl"}>Join us as...</Heading>
        </Box>
            <Stack gap={30} direction={{lg: "row"}} overflow={"auto"}>

                {/* MENTEE */}

                <Button 
                onClick={onOpen}
                size="md"
                cursor="pointer"
                bg={btn_colors}
                color={btn_text_colors}
                _hover={{ bg: btn_hover_colors }}
                >
                    A Mentee
                </Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your mentee account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>Birthday</FormLabel>
                            <Input placeholder='Birthday' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>University</FormLabel>
                            <Input placeholder='University' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={onClose} mr={3}>Cancel</Button>
                            <Button 
                                bg={useColorModeValue("light.400", "dark.300")} 
                                color={useColorModeValue("light.100", "dark.900")} 
                                _hover={{ bg: btn_hover_colors }}
                            >
                            Next
                            </Button>
                            
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Heading fontSize={"3xl"}>or</Heading>

                {/* MENTOR */}

                <Button 
                onClick={onOpen}
                size="md"
                cursor="pointer"
                bg={btn_colors}
                color={btn_text_colors}
                _hover={{ bg: btn_hover_colors }}
                >
                    A Mentor
                </Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your mentee account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>Birthday</FormLabel>
                            <Input placeholder='Birthday' />
                            </FormControl>

                            <FormControl mt={3}>
                            <FormLabel>University</FormLabel>
                            <Input placeholder='University' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={onClose} mr={3}>Cancel</Button>
                            <Button 
                                bg={useColorModeValue("light.400", "dark.300")} 
                                color={useColorModeValue("light.100", "dark.900")} 
                                _hover={{ bg: btn_hover_colors }}
                            >
                            Next
                            </Button>
                            
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
            <Stack alignItems={"center"} gap={30} direction={{lg: "row"}} overflow={"auto"}>
            <Image
                src={"/media/login-page/mentee.png"}
                w={{ xs: "100%", sm: "35%", md: "45%" }}
                alt={"login-page-photo"}
            ></Image>
            <Image
                src={"/media/login-page/mentor.png"}
                w={{ xs: "100%", sm: "35%", md: "45%" }}
                alt={"login-page-photo"}
            ></Image>
            </Stack>
        </VStack>
    </Flex>
    );
  }
  
  export default LoginWelcome;