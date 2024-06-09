import React from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  let ActiveLink = "activeLink";
  return (
    <div className="wrapper">
      <div className="row">
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? ActiveLink : "tab")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
