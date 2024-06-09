import "./NavBar.css";
import { useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [activeClass, setActiveClass] = useState(0);
  let navBarItems = [
    { text: "About", link: "#aboutSection" },
    { text: "Experience/Education", link: "#experienceSection" },
    { text: "Projects", link: "#projectSection" },
    { text: "Contact", link: "#contactSection" },
  ];

  let ActiveLink = "activeLink";
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            {navBarItems.map((item, index) => (
              <Nav.Link
                as={NavLink}
                //className={({ isActive }) => (isActive ? ActiveLink : "tab")}
                to={item.link}
              >
                <span>{item.text}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
