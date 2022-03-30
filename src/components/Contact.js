import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Employee from "./Employee";
import Student from "./Student";

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* Contact path ={location.pathname}
      <br />
      contact state value which is passed in Link == {location.state.name} */}
      <h1> Decendant Routes</h1>
      <Routes>
        <Route path="" element={<Student />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </div>
  );
};

export default Contact;
