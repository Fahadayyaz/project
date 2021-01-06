import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="">
        <Row>
          <Col>
            <Nav.Link href="#" className="nav__link">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#" className="nav__link">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#" className="nav__link">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Form.Group
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0rem 1rem",
              }}
            >
              <FormControl type="text" placeholder="Email Address" />
              <Button variant="dark">Submit</Button>
            </Form.Group>
          </Col>
          <Col>
            <Nav.Link href="#" className="nav__link">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
            <Nav.Link href="#" className="nav__link">
              Link
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
