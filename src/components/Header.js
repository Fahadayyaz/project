import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="light"
      style={{ minHight: "140px" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="fit-content"
            height="50"
            className="d-inline-block align-top"
            alt="brand-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/about-us" className="nav__link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/coffee-corner" className="nav__link">
              Coffee Corner
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav__link">
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="nav__link primary-cta cta"
              style={{ marginRight: "10px" }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/sign-up"
              className="nav__link secondary-cta cta"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
