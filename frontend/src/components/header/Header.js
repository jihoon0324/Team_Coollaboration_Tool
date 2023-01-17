import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [logInUser, setLogInUser] = useState("username");
  const [logIn, setLogIn] = useState(true);
  const [adminRole, setAdminRole] = useState(1);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className=" fs-4"
                style={{ color: "white" }}
                href="#features"
              >
                About
              </Nav.Link>
              <Nav.Link
                className=" fs-4"
                style={{ color: "white" }}
                href="#pricing"
              >
                Projects
              </Nav.Link>
              {logIn && (
                <Nav.Link
                  href="#link"
                  className="d-inline fs-4"
                  style={{ color: "white" }}
                >
                  Notice
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              {logIn ? (
                <NavDropdown title={logInUser} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Admin</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link
                    href=""
                    style={{ color: "white" }}
                    className=" fs-4"
                  >
                    Sing In
                  </Nav.Link>
                  <Nav.Link
                    href=""
                    style={{ color: "white" }}
                    className=" fs-4"
                  >
                    Join us
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
