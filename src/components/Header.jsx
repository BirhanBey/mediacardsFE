import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm="auto">
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="../../public/profilePicTest.png"
              />
              <Figure.Caption className="text-center">@UserName</Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col sm="auto">
            <p>Some information about the person</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
