import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/admin" element={<Navbar />}>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
