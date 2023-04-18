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
        <div className="card border-0">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h5>{link.name}</h5>
              {link.description || "No description available."}
              <a href={link.link} target="_blank">
                Go to site
              </a>
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
