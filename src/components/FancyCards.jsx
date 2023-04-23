import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap/";
import DelButton from "./DelButton";
import EditButton from "./EditButton";

// import "./darkmode/darkMode.scss";
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
  darkMode,
  selectedIcon,
  onIconChange,
  theme,
  icon,
  colors,
  setColor,
  newColor,
}) => {
  const [cardIcon, setCardIcon] = useState(selectedIcon);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleIconClick = (icon) => {
    setCardIcon(icon);
    onIconChange(index, icon);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="flip-card" onClick={handleCardClick}>
          <div
            className="flip-card-inner"
            style={{ transform: isFlipped ? "rotateY(180deg)" : "" }}
          >
            <div className="flip-card-front">
              <div
                className="icon rounded"
                onClick={() => handleIconClick(cardIcon)}
                style={{
                  backgroundColor: `${theme}`,
                }}
              >
                {cardIcon ? (
                  cardIcon
                ) : icon !== "facebook" &&
                  icon !== "instagram" &&
                  icon !== "twitter" &&
                  icon !== "linkedin" &&
                  icon !== "youtube" &&
                  icon !== "tiktok" &&
                  icon !== "reddit" &&
                  icon !== "snapchat" &&
                  icon !== "github" &&
                  icon !== "slack" &&
                  icon !== "discord" &&
                  icon !== "spotify" &&
                  icon !== "apple" &&
                  icon !== "google" &&
                  icon !== "amazon" &&
                  icon !== "skype" &&
                  icon !== "zoom" &&
                  icon !== "soundcloud" ? (
                  <i className="fa fa-user" aria-hidden="true"></i>
                ) : (
                  <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                )}
              </div>
            </div>
            <div className="flip-card-back">
              <div
                className="content w-100"
                style={{
                  color: darkMode ? "#ff0000" : "black",
                }}
              >
                <h5 className="mt-3">{link.name}</h5>
                {link.description || "No description available."}
                <br />
                <a href={link.link} target="_blank">
                  Go to {link.name}
                </a>

                <div className="mt-5" id="card-buttons">
                  <div id="edit-button">
                    <EditButton
                      userId={userId}
                      linkId={link.id}
                      name={link.name}
                      description={link.description}
                      url={link.link}
                      token={token}
                      handleRerender={handleRerender}
                      colors={colors}
                      setColor={setColor}
                      newColor={newColor}
                    />
                  </div>

                  <div id="delete-button">
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
          </div>
        </div>
        {/* <div className="card border-0 bg-transparent">
          <div className="slide slide1 position-relative d-flex justify-content-center align-items-center">
            <div
              className="icon rounded"
              onClick={() => handleIconClick(cardIcon)}
              style={{ backgroundColor: `${theme}` }}
            >
              {cardIcon ? (
                cardIcon
              ) : icon !== "facebook" &&
                icon !== "instagram" &&
                icon !== "twitter" &&
                icon !== "linkedin" &&
                icon !== "youtube" &&
                icon !== "tiktok" &&
                icon !== "reddit" &&
                icon !== "snapchat" &&
                icon !== "github" &&
                icon !== "slack" &&
                icon !== "discord" &&
                icon !== "spotify" &&
                icon !== "apple" &&
                icon !== "google" &&
                icon !== "amazon" &&
                icon !== "skype" &&
                icon !== "zoom" &&
                icon !== "soundcloud" ? (
                <i className="fa fa-user" aria-hidden="true"></i>
              ) : (
                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
              )}
            </div>
          </div>
          <div className="slide slide2 position-relative d-flex justify-content-center align-items-center p-20 rounded">
            <div
              className="content w-100"
              style={{
                color: darkMode ? "#ff0000" : "black",
              }}
            >
              <h5>{link.name}</h5>
              {link.description || "No description available."}
              <br />
              <a href={link.link} target="_blank">
                Go to {link.name}
              </a>
              <div className="d-flex mt-3" id="card-buttons">
                <EditButton
                  userId={userId}
                  linkId={link.id}
                  name={link.name}
                  description={link.description}
                  url={link.link}
                  token={token}
                  handleRerender={handleRerender}
                  colors={colors}
                  setColor={setColor}
                  newColor={newColor}
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
        </div> */}
      </Container>
    </>
  );
};

export default FancyCards;
