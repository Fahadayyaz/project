import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

class JobCard extends React.Component {
  render() {
    return (
      <Card
        style={{
          minWidth: "100%",
          marginTop: "1em",
          borderRadius: "12px",
          backgroundColor: "#eeeeee",
          minHeight: "150px",
          border: "none",
          boxShadow: "0px 3px 6px rgba(0,0,0,.1)",
          padding: "1em",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Title style={{ color: "#0098a0" }}>
            Machine Learning Team Lead
          </Card.Title>
          <Card.Text style={{ color: "#0098a0" }}>
            <Row
              style={{ display: "flex", alignItems: "center" }}
              className="section-jobs"
            >
              <Col style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <div className="location_name">California</div>
              </Col>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
                <div className="time_of_post">Posted 2 days ago</div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="dark" style={{ minWidth: "150px" }}>
                  Apply Now
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default JobCard;
