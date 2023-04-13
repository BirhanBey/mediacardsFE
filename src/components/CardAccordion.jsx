import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap/";
import DelButton from "./DelButton";

const CardAccordion = ({ link, index, removeCard }) => {
  const eventKey = `accordion-${index}`;

  return (
    <Accordion>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header> {link.name}</Accordion.Header>
        <Accordion.Body>
          {link.description || "No description available."}
          <a href={link.link}>Go to my {link.name}</a>

          <div className="d-flex justify-content-end">
            <DelButton index={index} removeCard={removeCard} linkId={link.id} />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CardAccordion;
