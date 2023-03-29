import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardLink = ({ link }) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <a href={link}>{link}</a>
        </Col>
      </Row>
    </>
  );
};

export default CardLink;
