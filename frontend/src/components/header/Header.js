import React, { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Hamburger direction="right" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className=" fs-4"
                style={{ color: "white" }}
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className=" fs-4"
                style={{ color: "white" }}
                href="/pricing"
              >
                Projects
              </Nav.Link>
              {user && (
                <Nav.Link
                  href="/link"
                  className="d-inline fs-4"
                  style={{ color: "white" }}
                >
                  Notice
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              {user ? (
                <NavDropdown title={user.username} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Admin</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogOut}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link
                    href="/signIn"
                    style={{ color: "white" }}
                    className=" fs-4"
                  >
                    Sing In
                  </Nav.Link>
                  <Nav.Link
                    href="/joinUs"
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
