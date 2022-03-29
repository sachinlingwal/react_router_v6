import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
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
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
