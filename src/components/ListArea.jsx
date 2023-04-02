import React, { useState } from "react";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DelButton from "./DelButton";

const ListArea = ({ deleteCard }) => {
  const [cards, setCards] = useState([]);

  const addCard = (link) => {
    setCards((prevCards) => [...prevCards, link]);
  };

  const removeCard = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <Container>
      {cards.map((link, index) => (
        <Row className="d-flex justify-content-sm-center" key={index}>
          <Col sm="auto">
            <br />
            <Card border="dark">
              <Card.Body className="text-center list-item ">
                <Card>
                  <DelButton index={index} removeCard={removeCard} />
                  <Card.Body className="d-flex text-center">
                    <CardLink link={link} />
                  </Card.Body>
                </Card>
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
