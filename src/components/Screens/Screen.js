import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

export default function Screen() {
  return (
    <Container fluid>
      <Jumbotron style={{ minHeight: "350px" }}>
        <Container>
          <h2>Hello, world!</h2>
          <p style={{ width: "50%" }}>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="outline-light">Sign Up</Button>
          </p>
        </Container>
      </Jumbotron>
      <Container>
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
