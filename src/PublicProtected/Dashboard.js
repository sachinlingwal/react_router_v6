import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { logoutUser } = props;
  const logout = () => {
    logoutUser();
    navigate("/auth");
  };
  return (
    <div>
      Dashboard
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
