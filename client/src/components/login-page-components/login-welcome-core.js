import {
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Flex,
  Heading,
  VStack,
  Icon,
  Button,
  Box,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

function LoginWelcomeCoreMentee() {
  return (
    <Stack direction={"column"}>
      <Image
        src={"/media/login-page/mentee.png"}
        boxSize="300px"
        w={{ xs: "100%", sm: "35%", md: "45%" }}
        alt={"login-page-photo"}
      ></Image>
    </Stack>
  );
}

function LoginWelcomeCore({ mentee, mentor }) {
  const box_bg_colors = useColorModeValue("light.100", "dark.200");
  const text_colors = useColorModeValue("light.900", "dark.900");
  const btn_bg_colors = useColorModeValue("light.400", "dark.300");
  const btn_border_colors = useColorModeValue("light.900", "dark.900");
  const highlight_font_gradient = useColorModeValue(
    "linear(to-r,  #225078,#5D6887)",
    "linear(to-r, #5D69BC,dark.900 )"
  );

  return (
    <Flex
      bg={box_bg_colors}
      p={7}
      borderRadius={"sm"}
      boxShadow={"lg"}
      maxW={"sm"}
      height={{ sm: "fit-content", md: "fit-content", lg: "lg" }}
    >
      <VStack>
        <Box>
          <Tabs isFitted size="md" variant="enclosed-colored">
            <TabList>
              <Tab>Mentee</Tab>
              <Tab>Mentor</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <LoginWelcomeCoreMentee></LoginWelcomeCoreMentee>
              </TabPanel>
              <TabPanel>
                <p>A mentor is a person who</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box>
          <Button
            my={5}
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
            boxShadow={"lg"}
            color={text_colors}
          >
            <HStack>
              <Heading
                fontWeight={"bold"}
                size={"sm"}
                textTransform={"uppercase"}
              >
                {"get started"}
              </Heading>
            </HStack>
          </Button>
        </Box>
      </VStack>
    </Flex>

    // <Flex>
    //   <Image
    //     src={"/media/login-page/mentee.png"}
    //     boxSize="300px"
    //     w={{ xs: "100%", sm: "35%", md: "45%" }}
    //     alt={"login-page-photo"}
    //   ></Image>

    // <Tabs isFitted size="md" variant="enclosed-colored">
    //   <TabList>
    //     <Tab>Mentee</Tab>
    //     <Tab>Mentor</Tab>
    //   </TabList>

    //   <TabPanels>
    //     <TabPanel>
    //       <p>a mentee</p>
    //     </TabPanel>
    //     <TabPanel>
    //       <p>A mentor is a person who</p>
    //     </TabPanel>
    //   </TabPanels>
    // </Tabs>
    //   <Image
    //     src={"/media/login-page/mentor.png"}
    //     boxSize="300px"
    //     w={{ xs: "100%", sm: "35%", md: "45%" }}
    //     alt={"login-page-photo"}
    //   ></Image>
    // </Flex>
  );
}

export default LoginWelcomeCore;
