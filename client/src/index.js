import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

// COMPONENTS
import Container from "./components/container";

// REACT-ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import LoginIndex from "./pages/login-page/login-page-index";
import AboutUsIndex from "./pages/about-us-page/about-us-page-index";
import TestComponentsHereIndex from "./pages/test-page/test-components-index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Container>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginIndex />} />
            <Route path="/test" element={<TestComponentsHereIndex />} />
            <Route path="/home" element={<App />} />
            <Route path="/about-us" element={<AboutUsIndex />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Container>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
