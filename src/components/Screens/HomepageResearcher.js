import React from "react";
import "./HomepageResearcher.scss";
import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import logo1 from "../../assets/homepageCompany/companies-logos/Random_App_Logo.png";
import logo2 from "../../assets/homepageCompany/companies-logos/lamborghini_PNG10709.png";
import logo3 from "../../assets/homepageCompany/companies-logos/580b57fcd9996e24bc43c51f.png";
import logo4 from "../../assets/homepageCompany/companies-logos/Oikya_Front_Logo.png";
import logo5 from "../../assets/homepageCompany/companies-logos/RPC-JP_Logo.png";
import pic1 from "../../assets/homepageCompany/ai-pic.png";
import pic2 from "../../assets/homepageCompany/ds-pic.png";
import pic3 from "../../assets/homepageCompany/other-pic.png";
import successpic from "../../assets/homepageCompany/SUCCESS STORIES.png";
import StoriesCard from "../reusable/StoriesCard";
import JobCardResearcher from "../reusable/JobCardResearcher";
import adpic from "../../assets/homepageResearcher/jumbotron-bg-pic-researcher.png";

export default function HomepageJobSeeker() {
  return (
    <Container fluid>
      <Jumbotron
        className="bg-picture-researcher"
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
          <div style={{ width: "50%", color: "#fff", padding: "1em 0em" }}>
            Don't search for jobs. Find the right fit instead.
          </div>
          <div>
            <Button variant="outline-light">Sign Up</Button>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Form.Group className="srearch-card">
          <FormControl
            type="search"
            placeholder="Search"
            variant="dark"
            style={{ margin: "0rem 0.5rem", maxWidth: "65%" }}
          />
          <Button
            variant="dark"
            style={{ margin: "0rem 0.5rem", minWidth: "200px", width: "35%" }}
          >
            Search Now
          </Button>
        </Form.Group>
      </Container>
      <Container fluid className="jobs-section">
        <Container style={{ padding: "4em 1em" }}>
          <Row className="section-heading-hiring">Recent Jobs</Row>
          <Row className="section-jobs">
            <Col style={{ minWidth: "65%", padding: "0em .9em" }}>
              <Row>
                <JobCardResearcher />
              </Row>
              <Row>
                <JobCardResearcher />
              </Row>
              <Row>
                <JobCardResearcher />
              </Row>
            </Col>
            <Col style={{ padding: "1em" }}>
              <Image
                src={adpic}
                alt="ad placement"
                className="ad-placement-pic"
                style={{
                  backgroundColor: "#0098a0",
                  width: "100%",
                  height: "350px",
                  borderRadius: "12px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
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
          <Row className="section-icons section">
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
                  <Card.Title>Data Scientest </Card.Title>
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
      </Container>
      <Container fluid className="stories-section">
        <Container>
          <img
            src={successpic}
            alt="successpic"
            className="successpic"
            style={{ width: "100%" }}
          />
          <Row>
            <StoriesCard />
            <StoriesCard />
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
