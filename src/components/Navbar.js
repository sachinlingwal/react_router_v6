import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      <Link to="/">Home</Link> <Link to="about">About</Link>
      <Link to="about/123">About US ID</Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
