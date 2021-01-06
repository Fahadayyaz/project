import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

export default function Screen() {
  return (
    <Container fluid>
      <Jumbotron
        className="bg-picture"
        style={{ minHeight: "560px", marginBottom: "0rem" }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "400px",
          }}
        >
          <h1 style={{ width: "40%", color: "#fff" }}>
            Discover Top Jobs For Data Professionals
          </h1>
          <p style={{ width: "50%" }}>
            Don't search for jobs. Find the right fit instead.
          </p>
          <p>
            <Button variant="outline-light">Sign Up</Button>
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Form.Group className="srearch-card">
          <Form.Control as="select">
            <option>Freelance</option>
            <option>Employeer</option>
          </Form.Control>
          <FormControl
            type="text"
            placeholder="Keywords"
            variant="dark"
            style={{ margin: "0rem 0.5rem" }}
          />
          <FormControl
            type="text"
            placeholder="Job Location"
            variant="dark"
            style={{ margin: "0rem 0.5rem" }}
          />
          <Button
            variant="dark"
            style={{ margin: "0rem 0.5rem", maxWidth: "450px" }}
          >
            Search Now
          </Button>
        </Form.Group>

        {/* <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card> */}
      </Container>
    </Container>
  );
}
