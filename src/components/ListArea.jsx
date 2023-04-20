import React, { useState, useEffect } from "react";
import CardAccordion from "./CardAccordion";
import AddButton from "./AddButton";
import EditButton from "./EditButton";
import CardLink from "./CardLink";
import { Row, Col, Card, Container, Accordion } from "react-bootstrap/";
import FancyCards from "./FancyCards";
import DelButton from "./DelButton";
import axios from "axios";

const ListArea = ({
  userId,
  token,
  rerender,
  handleRerender,
  handleIconChange,
  selectedIcon,
  icons,
  colors,
  setColor,
}) => {
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
        setCards(response.data.url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, [userId, rerender]); // add rerender to the dependency array of useEffect

  return (
    <Container>
      <Row
        xs={1}
        md={2}
        lg={3}
        xl={3}
        xxl={4}
        gap={1}
        className="d-flex justify-content-center"
      >
        {cards.map((link, index) => {
          // const eventKey = `accordion-${index}`; // generate unique event key for each accordion item
          // const isActive = eventKey === activeEventKey; // check if current item is active

          return (
            <Col key={index} className="mb-3">
              <FancyCards
                link={link}
                index={index}
                removeCard={removeCard}
                userId={userId}
                linkId={link.id}
                name={link.name}
                description={link.description}
                url={link.link}
                token={token}
                handleRerender={handleRerender}
                selectedIcon={selectedIcon}
                handleIconChange={handleIconChange}
              />
            </Col>
          );
        })}
      </Row>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <AddButton
              addCard={addCard}
              token={token}
              userId={userId}
              handleRerender={handleRerender}
              selectedIcon={selectedIcon}
              handleIconChange={handleIconChange}
              icons={icons}
              colors={colors}
              setColor={setColor}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ListArea;
