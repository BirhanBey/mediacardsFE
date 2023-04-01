import React, { useState } from "react";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ListArea = () => {
  const [cards, setCards] = useState([]);

  const addCard = (link) => {
    setCards((prevCards) => [...prevCards, link]);
  };

  return (
    <>
      {cards.map((link, index) => (
        <Row className="justify-content-md-center" key={index}>
          <Col md="auto">
            <br />
            <Card border="dark" style={{ width: "50rem" }}>
              <Card.Body className="text-center list-item">
                <CardLink link={link} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
      <br />
      <AddButton addCard={addCard} />
    </>
  );
};

export default ListArea;
