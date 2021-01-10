import React from "react";
import "./Homepage.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import pic1 from "../../assets/homepage/company.png";
import pic2 from "../../assets/homepage/researcher.png";
import pic3 from "../../assets/homepage/jobseeker.png";

class Homepage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container style={{ padding: "2em 0em" }}>
          <Row className="container__row">
            <Col>
              <Nav.Link as={Link} to="/company">
                <Card className="bg-dark text-white card__body">
                  <Card.Img src={pic1} alt="Card image" />
                  <Card.ImgOverlay className="card__overlay">
                    <Card.Title className="card__title">Company</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link as={Link} to="/researcher">
                <Card className="bg-dark text-white card__body">
                  <Card.Img src={pic2} alt="Card image" />
                  <Card.ImgOverlay className="card__overlay">
                    <Card.Title className="card__title">Researcher</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link as={Link} to="/jobseeker">
                <Card className="bg-dark text-white card__body">
                  <Card.Img src={pic3} alt="Card image" />
                  <Card.ImgOverlay className="card__overlay">
                    <Card.Title className="card__title">Job Seeker</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Homepage;
