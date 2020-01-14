import React from "react";
import { Button } from "../components/Button";
import { useAuth } from "react-use-auth";

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  if (isAuthenticated()) {
    return <Button onClick={logout}>Logout</Button>;
  } else {
    return <Button onClick={login}>Login</Button>;
  }
};

export default Login;
