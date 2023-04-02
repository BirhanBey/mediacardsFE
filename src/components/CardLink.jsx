import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";

const CardLink = ({ link }) => {
  return (
    <Container>
      <Row>
        <Card className="d-flex flex-md-row align-items-sm-center">
          <Col xs={2}>
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/C4E0BAQHw2mk1XF7vUw/company-logo_200_200/0/1672915872372?e=1688601600&v=beta&t=aNGanUg7_IGdNM6hJPtjHH6EttjV9snQzil_gm3X7m0"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{link.name}</Card.Title>
              <Card.Text className="text-wrap">
                {link.description || "No description available."}
              </Card.Text>
              <Card.Link href={link.url}>Website</Card.Link>
            </Card.Body>
          </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default CardLink;
