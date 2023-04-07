import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DelButton from "./DelButton";
import axios from "axios";

const ListArea = ({ deleteCard }) => {
  const [cards, setCards] = useState([]);
  const [token, setToken] = useState(""); // define the token variable

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
          "https://s10.syntradeveloper.be/api/lists"
        );
        console.log(response.data);
        setCards(response.data); // update cards state with the retrieved data
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <Container>
      {cards.map((link, index) => (
        <Row className="d-flex justify-content-sm-center" key={index}>
          <Col sm="auto">
            <br />

            <Card.Body className="d-flex text-center text-center list-item">
              <CardLink link={link} />
            </Card.Body>
          </Col>
        </Row>
      ))}
      <AddButton addCard={addCard} setToken={setToken} />{" "}
    </Container>
  );
};

export default ListArea;
