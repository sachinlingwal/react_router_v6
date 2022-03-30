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
          {/* now we will use index keyword  */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/about/:id" element={<About />} />
        </Route>
        <Route path="admin" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
