import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [auth, set_auth] = useState(null);

  useEffect(() => {
    axios.get("/").then(({ data }) => {
      set_auth(data);
    });
  }, []);

  if (auth === null) {
    return <Loading />;
  }
  if (auth) {
    return <DashboardIndex auth={auth} />;
  }
  return <LoginPage />;
}

export default App;
