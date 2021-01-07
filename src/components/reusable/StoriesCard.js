import React from "react";
import { Card, Image, Col } from "react-bootstrap";
import sadpic from "../../assets/homepageCompany/sadpic.png";

export default function storiesCard() {
  return (
    <Col
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card bg="primary" style={{ width: "22rem" }} className="mb-2">
        <Card.Body className="card-title">
          <Card.Title
            style={{
              color: "#242424",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src={sadpic} roundedCircle className="imageAbsolute" />
            <div className="person-name" style={{ marginLeft: "25px" }}>
              Jon Snow
            </div>{" "}
            <div className="time">3 days ago</div>
          </Card.Title>
          <Card.Text
            style={{
              overflow: "hidden",
              color: "#242424",
              maxHeight: "10rem",
              padding: ".3em",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
