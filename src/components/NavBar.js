import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>

        <Navbar.Brand className={styles.NavMenuLogo}>
          <img src={logo} alt="logo" height="45" />
          <p> Ask Cupid</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <i className="fas fa-sign-in-alt m-1"></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus m-1"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
};

export default NavBar;