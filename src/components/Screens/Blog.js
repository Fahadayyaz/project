import React from "react";
import "./Blog.scss";
import {Container,Image,Col,Row,Card} from "react-bootstrap";

class Blog extends React.Component {
  render() {
    return (
    <Container fluid>
      <Container fluid>
      <Image src="" alt="blog-bg" fluid />
      </Container>
      <Container>
        <Row>Blogs</Row>
        <Row>
          <Col>
          <Card>
            <Card.Image src=""></Card.Image>
            <Card.Title>name</Card.Title>
            <Card.Text>lorem20</Card.Text>
          </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
    );
  }
}

export default Blog;
