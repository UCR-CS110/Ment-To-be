import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Container } from "../../components/container.js";
import LandingPageNavBarCore from "../../components/nav-bar/landing-page-nav-bar-core.js";
import UserProfileCard from "../../components/about-us-components/about-us-template-card.js";
import LoginWelcome from "../../components/new-user-components/mentee_mentor_caller.js";
import Loading from "../../authentication/loading.js";
import ReviewCore from "../../components/dashboard-components/review/review-core.js";
import Xin from "../../components/about-us-components/xin.js";
import Yenna from "../../components/about-us-components/yenna.js";
import LoginPageCore from "../../components/login-page-components/login-page-core.js";
import NewUserCore from "../../components/new-user-components/new-user-core.js";
import MenteeSignUpForm from "../../components/new-user-components/mentee-signup-form.js";
import DatePicker from "../../components/dashboard-components/calendar/date-picker.tsx";
import { Text, Box } from "@chakra-ui/react";
import CalendarCard from "../../components/dashboard-components/calendar/calendar-card.js";
function TestComponentsHereIndex() {
  const [myDate, setMyDate] = useState("");
  const [myDate2, setMyDate2] = useState("");
  return (
    <Container>
      <LandingPageNavBarCore></LandingPageNavBarCore>
      <VStack>
        <LoginWelcome></LoginWelcome>
        {/* <UserProfileCard></UserProfileCard>  */}
        <ReviewCore></ReviewCore>
        {/* <NewUserCore></NewUserCore> */}
        <CalendarCard></CalendarCard>
      </VStack>
    </Container>
  );
}

export default TestComponentsHereIndex;
