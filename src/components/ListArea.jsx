import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DelButton from "./DelButton";
import axios from "axios";

const ListArea = ({ userId, token }) => {
  const [cards, setCards] = useState([]);

  const addCard = (link) => {
    setCards((prevCards) => [...prevCards, link]);
  };

  const removeCard = (linkId) => {
    setCards((prevCards) => prevCards.filter((link) => link.id !== linkId));
  };

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(
          `https://s3.syntradeveloper.be/api/users/${userId}`
        );
        setCards(response.data.url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, [userId]);

  return (
    <Container>
      {cards.map((link, index, name) => (
        <Row className="d-flex justify-content-sm-center" key={index}>
          <Col sm="auto">
            <br />
            <Card.Body className="d-flex text-center text-center list-item">
              <CardLink link={link} />
              <DelButton
                removeCard={removeCard}
                linkId={link.id}
                userId={userId}
                token={token}
              />
            </Card.Body>
          </Col>
        </Row>
      ))}
      <AddButton addCard={addCard} token={token} userId={userId} />
    </Container>
  );
};

export default ListArea;
