import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const ActiveLink = ({ isActive }) => {
    return { color: isActive ? "red" : "", margin: "1em" };
  };
  return (
    <div>
      <NavLink to="/" style={ActiveLink}>
        Home
      </NavLink>
      <NavLink style={ActiveLink} to="about">
        About
      </NavLink>
      <NavLink style={ActiveLink} to="about/123">
        About US ID
      </NavLink>
      {/* we can send state  */}
      <NavLink style={ActiveLink} to="contact" state={{ name: "ReactJs" }}>
        Contact us
      </NavLink>
      <div style={{ margin: "2em 1em" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
