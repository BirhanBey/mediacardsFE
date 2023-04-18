import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap/";
import DelButton from "./DelButton";
import EditButton from "./EditButton";
import {
  Row,
  Container,
  Col,
  Button,
  Offcanvas,
  Stack,
  Modal,
} from "react-bootstrap";

const FancyCards = ({
  link,
  index,
  removeCard,
  userId,
  linkId,
  name,
  description,
  token,
  url,
  handleRerender,
}) => {
  return (
    <>
      <Container>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div className="flip-card-back">
              <h3>{link.name}</h3>
              <p> {link.description || "No description available."}</p>
              <p>
                <a href={link.link} target="_blank">
                  Go to site
                </a>
              </p>
              <div id="card-buttons">
                <EditButton
                  userId={userId}
                  linkId={link.id}
                  name={link.name}
                  description={link.description}
                  url={link.link}
                  token={token}
                  handleRerender={handleRerender}
                />
                <DelButton
                  userId={userId}
                  removeCard={removeCard}
                  linkId={link.id}
                  token={token}
                  handleRerender={handleRerender}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FancyCards;
