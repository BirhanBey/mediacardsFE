import React, { useState } from "react";
import Footer from "./Footer";

// import "./darkmode/darkMode.scss";
import { Container } from "react-bootstrap";

const FancyCards = ({
  link,
  index,
  darkMode,
  selectedIcon,
  onIconChange,
  theme,
  icon,
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

              </div>
            </div>
          </div>
        </div> */}
      </Container>
      <Footer />
    </>
  );
};

export default FancyCards;
