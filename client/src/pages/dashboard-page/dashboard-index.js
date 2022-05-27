import React, { useState, useEffect } from "react";
import axios from "axios";
import DashbordCore from "../../components/dashboard-components/dashboard-core.js";
import Loading from "../../authentication/loading.js";
import { ScaleFade } from "@chakra-ui/react";

function DashbordIndex() {
  const [auth, set_auth] = useState({});
  const [loading, set_loading] = useState(true);

  function handle_loading() {
    setTimeout(() => set_loading(false), 2500);
  }

  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      set_auth(data);
      console.log(auth);
      handle_loading();
    });
  }, []);

  if (loading) return <Loading></Loading>;
  else {
    return (
      <ScaleFade initialScale={0.7} in="true">
        <DashbordCore user={auth}></DashbordCore>
      </ScaleFade>
    );
  }
}

export default DashbordIndex;
