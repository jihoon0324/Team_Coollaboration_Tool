import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";

import logo from "../../assets/logo.png";

const Header = () => {
  const [logInUser, setLogInUser] = useState("username");
  const [logIn, setLogIn] = useState(false);
  const [adminRole, setAdminRole] = useState(1);

  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Nav className="me-auto d-flex justify-content-between w-100">
            <div className="d-inline" id="nav_center">
              <Nav.Link
                href="#home"
                className="d-inline"
                style={{ color: "white" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="d-inline"
                style={{ color: "white" }}
              >
                Projects
              </Nav.Link>
              {logIn && (
                <Nav.Link
                  href="#link"
                  className="d-inline"
                  style={{ color: "white" }}
                >
                  Notice
                </Nav.Link>
              )}
            </div>
            <div className="d-inline ">
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
                    className="d-inline"
                  >
                    Sing In
                  </Nav.Link>
                  <Nav.Link
                    href=""
                    style={{ color: "white" }}
                    className="d-inline"
                  >
                    Join us
                  </Nav.Link>{" "}
                </>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
