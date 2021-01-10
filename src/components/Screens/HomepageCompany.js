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
  Image,
  InputGroup,
} from "react-bootstrap";
import logo1 from "../../assets/homepageCompany/companies-logos/Random_App_Logo.png";
import logo2 from "../../assets/homepageCompany/companies-logos/lamborghini_PNG10709.png";
import logo3 from "../../assets/homepageCompany/companies-logos/580b57fcd9996e24bc43c51f.png";
import logo4 from "../../assets/homepageCompany/companies-logos/Oikya_Front_Logo.png";
import logo5 from "../../assets/homepageCompany/companies-logos/RPC-JP_Logo.png";
import pic1 from "../../assets/homepageCompany/ai-pic.png";
import pic2 from "../../assets/homepageCompany/ds-pic.png";
import pic3 from "../../assets/homepageCompany/other-pic.png";
import icon1 from "../../assets/homepageCompany/hiring/Group 154@2x.png";
import icon2 from "../../assets/homepageCompany/hiring/Group 152@2x.png";
import icon3 from "../../assets/homepageCompany/hiring/Group 153@2x.png";
import happypic from "../../assets/homepageCompany/happypic.png";
import sadpic from "../../assets/homepageCompany/sadpic.png";
import successpic from "../../assets/homepageCompany/SUCCESS STORIES.png";
import "./HomepageCompany.scss";
import StoriesCard from "../reusable/StoriesCard";

class HomepageCompany extends React.Component {
  render() {
    return (
      <Container fluid>
        <Jumbotron
          className="bg-picture-company"
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
            <InputGroup style={{ margin: "0rem 0.5rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{
                    backgroundColor: "white",
                    borderRight: "none",
                    color: "#15878c",
                  }}
                  id="inputGroup-sizing-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                style={{
                  marginLeft: "0em",
                  borderLeft: "none",
                }}
              >
                <option>Freelance</option>
                <option>Employeer</option>
              </Form.Control>
            </InputGroup>
            <InputGroup style={{ margin: "0rem 0.5rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{
                    backgroundColor: "white",
                    borderRight: "none",
                    color: "#15878c",
                  }}
                  id="inputGroup-sizing-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Keywords"
                variant="dark"
                style={{
                  marginLeft: "0em",
                  borderLeft: "none",
                }}
              />
            </InputGroup>
            <InputGroup style={{ margin: "0rem 0.5rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{
                    backgroundColor: "white",
                    borderRight: "none",
                    color: "#15878c",
                  }}
                  id="inputGroup-sizing-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Job Location"
                variant="dark"
                style={{
                  marginLeft: "0em",
                  borderLeft: "none",
                }}
              />
            </InputGroup>
            <Button
              variant="dark"
              style={{
                margin: "0rem 0.5rem",
                minWidth: "200px",
                width: "100%",
              }}
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
                className="icon"
              >
                <img src={icon1} alt="brand-logo" />
                <Row className="icon-info">I'm looking for a resource of..</Row>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="icon"
              >
                <img src={icon2} alt="brand-logo" />
                <Row className="icon-info">I'm looking for a resource of..</Row>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="icon"
              >
                <img src={icon3} alt="brand-logo" />
                <Row className="icon-info">I'm looking for a resource of..</Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="decision-section">
          <Container>
            <Row>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ color: "#fff" }}>You Decide Who's Qualified</h1>
                <div
                  style={{
                    overflow: "hidden",
                    color: "#fff",
                    padding: "1em 0em",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </div>
                <div>
                  <Button variant="dark" style={{ width: "60%" }}>
                    Post A Job
                  </Button>
                </div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={happypic} roundedCircle className="successpic" />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="motivation-section">
          <Container>
            <Row>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image src={sadpic} roundedCircle className="successpic-alt" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ color: "#242424" }}>
                  Stop Paying for Unqualified Candidates
                </h1>
                <div
                  style={{
                    overflow: "hidden",
                    color: "#242424",
                    padding: "1em 0em",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </div>
                <div>
                  <Button variant="dark" style={{ width: "60%" }}>
                    Start Hiring
                  </Button>
                </div>
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
}
export default HomepageCompany;
