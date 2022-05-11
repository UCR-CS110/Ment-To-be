import { VStack } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { Container } from "../../components/container.js";
import NavBarCore from "../../components/nav-bar/nav-bar-core.js";
import UserProfileCard from "../../components/test-components/user-profile.js";
import axios from "axios";

function DashbordIndex() {
  const [auth, set_auth] = useState(null);

  useEffect(() => {
    async function fetch_data() {
      await axios.get("http://localhost:3001/auth-check").then(({ data }) => {
        console.log(data);
        set_auth(data);
      });
    }
    fetch_data();
  }, []);

  return (
    <Container>
      <NavBarCore></NavBarCore>
      <VStack>
        <UserProfileCard></UserProfileCard>
      </VStack>
    </Container>
  );
}

export default DashbordIndex;
