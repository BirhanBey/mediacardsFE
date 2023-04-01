import React, { useState } from "react";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import DelButton from "./DelButton";

const ListArea = () => {
  const [cards, setCards] = useState([]);

  const addCard = (link) => {
    setCards((prevCards) => [...prevCards, link]);
  };

  return (
    <Container >
      {cards.map((link, index) => (
        
        <Row className="d-flex justify-content-md-center" key={index}>
          <Col md="auto" >
            <br />

            <Card border="dark" style={{ width: "50rem" }}>
              <Card.Body className="text-center list-item">

            <Card border="none"  >
             <DelButton />            
              <Card.Body className="d-flex text-center">

                <CardLink link={link} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
      <AddButton addCard={addCard} />
    </Container>
  );
};

export default ListArea;
