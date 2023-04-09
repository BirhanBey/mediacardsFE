import React, { useState } from "react";
import { Col, Container, Row, Card, Modal } from "react-bootstrap";
import axios from "axios";
import DelButton from "./DelButton";

const CardLink = ({ link, index, removeCard }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Row>
        <Card
          className="d-flex flex-md-row align-items-sm-center"
          id="card-item"
          onClick={toggleExpand}
          style={{
            cursor: "pointer",
            width: "700px",
            minHeight: "80px",
            backgroundColor: "#212529",
          }}
        >
          {/* <Col xs={3}>
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/C4E0BAQHw2mk1XF7vUw/company-logo_200_200/0/1672915872372?e=1688601600&v=beta&t=aNGanUg7_IGdNM6hJPtjHH6EttjV9snQzil_gm3X7m0"
            />
          </Col> */}
          <Col>
            <Card.Body>
              <Card.Title>{link.name}</Card.Title>
              {expanded && (
                <Card.Text className="text-wrap">
                  {link.description || "No description available."}
                </Card.Text>
              )}
              <Card.Link href={link.url}>Go to my {link.name}</Card.Link>
              <div className="d-flex justify-content-end">
                <DelButton
                  index={index}
                  removeCard={removeCard}
                  linkId={link.id}
                />
              </div>
            </Card.Body>
          </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default CardLink;
