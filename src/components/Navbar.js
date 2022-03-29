import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      <Link to="/">Home</Link>
      <br />
      <Link to="about">About</Link>
      <br />
      <Link to="about/123">About US ID</Link>
      <br />
      <Link to="contact">Contact us</Link>
      <br />
      <div style={{ margin: "2em 1em" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
