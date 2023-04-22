import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import backgroundImage1 from "./images/image1.jpg";
import backgroundImage2 from "./images/image2.jpg";
import backgroundImage3 from "./images/image3.jpg";

function BackgroundSelector({
  handleBackgroundChange,
  handleCloseBackGroundModal,
}) {
  const handleImageSelect = (image) => {
    handleBackgroundChange(image);
  };

  const imgStyle = {
    width: "90px",
    height: "60px",

    marginBottom: "5px",
    marginLeft: "5px",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    margin: "0px",
  };

  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="link"
            style={buttonStyle}
            onClick={() => handleImageSelect(backgroundImage1)}
          >
            <img
              src={backgroundImage1}
              alt="Background Image 1"
              style={imgStyle}
            />
          </Button>
        </Col>
        <Col>
          <Button
            variant="link"
            style={buttonStyle}
            onClick={() => handleImageSelect(backgroundImage2)}
          >
            <img
              src={backgroundImage2}
              alt="Background Image 2"
              style={imgStyle}
            />
          </Button>
        </Col>
        <Col>
          <Button
            variant="link"
            style={buttonStyle}
            onClick={() => handleImageSelect(backgroundImage3)}
          >
            <img
              src={backgroundImage3}
              alt="Background Image 3"
              style={imgStyle}
            />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default BackgroundSelector;
