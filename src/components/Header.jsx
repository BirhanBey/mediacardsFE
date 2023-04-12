import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ userName, userBio }) => {
  return (
    <div className="header-container">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col sm="auto">
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/public/profilePicTest.png"
              />
              <Figure.Caption className="text-center">
                {userName}
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto">
            <p style={{ color: "grey" }}>{userBio}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
