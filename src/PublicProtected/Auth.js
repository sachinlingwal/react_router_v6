import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const { auth } = props;

  const navigate = useNavigate();
  const login = () => {
    auth();
    navigate("/dashboard");
  };
  return (
    <div>
      Auth
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Auth;
