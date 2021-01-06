import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="index.html">
          <img
            src=""
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" exact className="nav__link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/link" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link as={Link} to="/link1" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link as={Link} to="/link2" className="nav__link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
