import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      {/* inside navigate we can pass state like this  */}
      <button
        onClick={() => navigate("contact", { state: { name: "sachin" } })}
      >
        move to contact page
      </button>
    </div>
  );
};

export default Home;
