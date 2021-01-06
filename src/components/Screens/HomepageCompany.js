import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormControl,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import logo1 from "../../assets/homepageCompany/companies-logos/Random_App_Logo.png";
import logo2 from "../../assets/homepageCompany/companies-logos/lamborghini_PNG10709.png";
import logo3 from "../../assets/homepageCompany/companies-logos/580b57fcd9996e24bc43c51f.png";
import logo4 from "../../assets/homepageCompany/companies-logos/Oikya_Front_Logo.png";
import logo5 from "../../assets/homepageCompany/companies-logos/RPC-JP_Logo.png";
import pic1 from "../../assets/homepageCompany/ai-pic.png";
import pic2 from "../../assets/homepageCompany/ds-pic.png";
import pic3 from "../../assets/homepageCompany/other-pic.png";

export default function HomepageCompany() {
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
            style={{ margin: "0rem 0.5rem", minWidth: "200px", width: "100%" }}
          >
            Search Now
          </Button>
        </Form.Group>
        <Container
          style={{
            padding: "4em 0em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Row>
            <Col className="section-heading">
              Top Companies Hiring From AIDA PRO
            </Col>
          </Row>
          <Row className="section-icons">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo1}
                alt="brand-logo"
                style={{ transform: "Scale(1.5)" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo2}
                alt="brand-logo"
                style={{ transform: "Scale(1.5)" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo3}
                alt="brand-logo"
                style={{ transform: "Scale(1.5)" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo4}
                alt="brand-logo"
                style={{ transform: "Scale(1.5)" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo5}
                alt="brand-logo"
                style={{ transform: "Scale(1.5)" }}
              />
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            paddingBottom: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Row>
            <Col className="section-heading">
              I'm looking for a resource of..
            </Col>
          </Row>
          <Row className="section-icons section"></Row>
        </Container>
        <Container
          style={{
            paddingBottom: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="hiring"
        >
          <Row>
            <Col className="section-heading-hiring">
              Your Choice of Hiring Options
            </Col>
          </Row>
          <Row className="section-icons">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card className="bg-dark text-white imgCard">
                <Card.Img src={pic1} alt="Card image" />
                <Card.ImgOverlay className="overLay">
                  <Card.Title>Artificial Intelligence</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card className="bg-dark text-white imgCard">
                <Card.Img src={pic2} alt="Card image" />
                <Card.ImgOverlay className="overLay">
                  <Card.Title>Data Scientist </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card className="bg-dark text-white imgCard">
                <Card.Img src={pic3} alt="Card image" />
                <Card.ImgOverlay className="overLay">
                  <Card.Title>Other Professionals</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

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
