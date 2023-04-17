import React, { useState, useEffect } from "react";
import CardAccordion from "./CardAccordion";
import AddButton from "./AddButton";
import CardLink from "./CardLink";
import { Row, Col, Card, Container, Accordion } from "react-bootstrap/";

import DelButton from "./DelButton";
import axios from "axios";
const ListArea = ({ userId, token }) => {
  const [cards, setCards] = useState([]);
  const [activeEventKey, setActiveEventKey] = useState(null); // add new state to keep track of active event key

  const addCard = (link) => {
    setCards((prevCards) => [...prevCards, link]);
  };

  const removeCard = (linkId) => {
    setCards((prevCards) => prevCards.filter((link) => link.id !== linkId));
  };

  const handleAccordionToggle = (eventKey) => {
    setActiveEventKey(eventKey === activeEventKey ? null : eventKey); // toggle the active event key state
  };

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(
          `https://s3.syntradeveloper.be/api/users/${userId}`
        );
        setCards(response.data.url); // update cards state with the retrieved data
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, [userId]);

  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {cards.map((link, index) => {
          const eventKey = `accordion-${index}`; // generate unique event key for each accordion item
          const isActive = eventKey === activeEventKey; // check if current item is active

          return (
            <Col key={index} className="mb-3">
              <Accordion
                activeKey={isActive ? eventKey : null}
                onSelect={handleAccordionToggle}
              >
                <Accordion.Item eventKey={eventKey} id="accordion">
                  <Accordion.Header id="accordion-header">
                    <h5>{link.name}</h5>
                  </Accordion.Header>
                  <Accordion.Body id="accordion-body">
                    {link.description || "No description available."}
                    <a href={link.link}>Go to my {link.name}</a>
                    <div className="d-flex justify-content-end">
                      <DelButton
                        userId={userId}
                        removeCard={removeCard}
                        linkId={link.id}
                        token={token}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          );
        })}
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <AddButton addCard={addCard} token={token} userId={userId} />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default ListArea;
