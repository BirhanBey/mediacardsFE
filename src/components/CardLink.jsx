import React, { useState } from "react";
import { Col, Container, Row, Card, Dropdown  } from "react-bootstrap";
// import Col from "react-bootstrap/Col";

const CardLink = ({ link }) => {
  return (
    <Container>
      <Row>                
        <Card className="d-flex flex-md-row align-items-sm-center" style={{width:'100%'}} >
          <Col xs={2}>
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4E0BAQHw2mk1XF7vUw/company-logo_200_200/0/1672915872372?e=1688601600&v=beta&t=aNGanUg7_IGdNM6hJPtjHH6EttjV9snQzil_gm3X7m0" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text className="text-warp-wrap">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">LinkedIn Address</Card.Link>
              <Card.Link href="#">E-mail</Card.Link>
            </Card.Body>
          </Col>
        </Card>
     </Row>
    </Container>
  );
};

export default CardLink;
