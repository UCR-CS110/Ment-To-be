import axios from "axios";
import React, { useEffect, useState } from "react";
import BrowseCore from "../../components/dashboard-components/browse-core/browse-core";

function BrowseIndex() {
  const [response, set_response] = useState([]);

  useEffect(() => {
    axios.get("/getUsers").then(({ data }) => {
      set_response([...data]);
    });
  }, []);

  return <BrowseCore results={response}></BrowseCore>;
}

export default BrowseIndex;
