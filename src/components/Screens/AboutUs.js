import React from "react";
import "./AboutUs.scss";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/AboutUs/Mask Group 16.png";
import about2 from "../../assets/AboutUs/target.png";
import about3 from "../../assets/AboutUs/binocular.png";
import about4 from "../../assets/AboutUs/Team Members.png";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about__rapper">
        <div className="about__header">
          <img src={about1} alt="about-bg-pic" />
          <div className="center">
            <h1 className="about">About Us</h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quibusdam voluptatem minus maiores natus iusto earum
              quaerat vel reprehenderit, magni ratione numquam dicta voluptates
              exercitationem repellat provident repellendus? Aperiam, minima?
            </p>
          </div>
        </div>
        <Container className="target">
          <Row>
            <Col>
              <img src={about2} alt="" />
              <p
                style={{
                  color: "#15878C",
                }}
              >
                Our Mission
              </p>
            </Col>
            <Col>
              <p
                style={{
                  color: "#1C1C1C",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
                commodi soluta. Ad odit nemo minima reprehenderit, excepturi non
                voluptatem enim hic soluta, vel laudantium natus facilis eius,
                praesentium quos cum.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="target2">
          <Row>
            <Col className="about">
              <p style={{ color: "#1C1C1C" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
                commodi soluta. Ad odit nemo minima reprehenderit, excepturi non
                voluptatem enim hic soluta, vel laudantium natus facilis eius
              </p>
            </Col>
            <Col>
              <img src={about3} alt="" />
              <p style={{ color: "#15878C" }}>Our Vision</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1 style={{ color: "#15878C" }}>Our Team</h1>
              <p style={{ color: "#1C1C1C" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quibusdam voluptatem minus maiores natus iusto earum
                quaerat vel reprehenderit, magni ratione numquam dicta
                voluptates exercitationem repellat provident repellendus?
                Aperiam, minima?
              </p>
            </Col>
            <Col>
              <img height="350px" src={about4} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default AboutUs;
