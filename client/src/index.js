import React, { StrictMode } from "react";

import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
// THEME
import theme from "./theme";

// REACT-ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import LandingPageIndex from "./pages/landing-page/landing-page-index";
import AboutUsIndex from "./pages/about-us-page/about-us-page-index";
import TestComponentsHereIndex from "./pages/test-page/test-components-index";
import LoginPageIndex from "./pages/login-page/login-page-index";
import DashbordIndex from "./pages/dashboard-page/dashboard-index";
import NewUserIndex from "./pages/new-user-page/new-user-index";
import BrowseIndex from "./pages/browse-page/browse-index";
import CheckUserStatus from "./authentication/check-user-status";
import ChatRoomIndex from "./pages/chatroom-page/chatroom-index";
import ChatIndex from "./pages/chat-page/chat-index";

const rootElement = document.getElementById("root");
const manager = createLocalStorageManager("my-key");
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider colorScheme={manager} theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageIndex />} />
          <Route
            path="/check-user-status"
            element={<CheckUserStatus />}
          ></Route>
          <Route path="/login" element={<LoginPageIndex />} />
          <Route path="/new-user" element={<NewUserIndex />} />
          <Route path="/test" element={<TestComponentsHereIndex />} />
          <Route path="/home" element={<App />} />
          <Route path="/about-us" element={<AboutUsIndex />} />
          <Route path="/dashboard" element={<DashbordIndex />} />
          <Route path="/browse" element={<BrowseIndex />} />
          <Route path="/chat/:room_id" element={<ChatIndex />} />
          <Route path="/chat" element={<ChatRoomIndex />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
