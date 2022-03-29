import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Contact {location.pathname}
      <br />
      contact {location.state.name}
    </div>
  );
};

export default Contact;
