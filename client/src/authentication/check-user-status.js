import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function CheckUserStatus() {
  const [user, set_user] = useState({});

  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      set_user(data);
    });
  }, []);

  if (
    user.mentee_profile_exists === true ||
    user.mentor_profile_exists === true
  ) {
    return <Navigate to={"/dashboard"}></Navigate>;
  } else if (
    user.mentee_profile_exists === false &&
    user.mentor_profile_exists === false
  ) {
    return <Navigate to="/new-user"></Navigate>;
  }
}

export default CheckUserStatus;
