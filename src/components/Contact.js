import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Contact path ={location.pathname}
      <br />
      contact state value which is passed in Link == {location.state.name}
    </div>
  );
};

export default Contact;
