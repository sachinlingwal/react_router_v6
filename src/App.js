import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* //!handling error of routes */}
        {/* //* 1. first way */}
        {/* <Route path="*" element={<Error />} /> */}

        {/* 2. second way  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
