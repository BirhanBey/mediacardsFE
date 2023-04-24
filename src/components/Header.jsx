import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ userName, userBio, userId, rerender, handleRerender }) => {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      const response = await fetch(
        `https://www.s3.syntradeveloper.be/backend/api/users/${userId}/pic`
      );
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setUserImage(imageUrl);
    };

    fetchUserImage();
  }, [userId, handleRerender]);

  return (
    <div className="header-container">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col sm="auto">
            <Figure id="profile-pic">
              {userImage ? (
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={userImage}
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <Figure.Image
                  width={171}
                  height={180}
                  alt="default profile picture"
                  src="/public/profilePicTest.png"
                />
              )}
              <Figure.Caption className="text-center">
                <h1 id="username">{userName}</h1>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto">
            <p style={{ color: "white" }}>
              {userBio ? userBio : "This is my description"}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
