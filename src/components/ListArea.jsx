import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListArea = () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card border="dark" style={{ width: "50rem" }}>
            <Card.Body className="text-center">
              <a href="https://www.instagram.com/noahbovee/">Instagram</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default ListArea;
