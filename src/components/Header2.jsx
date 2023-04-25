import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header2 = ({
  userId2,
  rerender,
  handleRerender,
  userName2,
  userBio2,
}) => {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      const response = await fetch(
        `https://www.s3.syntradeveloper.be/backend/api/users/${userId2}/pic`
      );
      if (response.status === 200) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setUserImage(imageUrl);
      } else {
        setUserImage(null);
      }
    };

    if (userId2) {
      fetchUserImage();
    } else {
      setUserImage(null);
    }
  }, [userId2, handleRerender]);

  return (
    <div className="header-container">
      <Container className="text-center mt-3">
        <Row className="justify-content-center">
          <Col sm="auto">
            {userImage && (
              <Figure id="profile-pic">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="profile picuuuture"
                  src={userImage}
                  style={{ borderRadius: "50%" }}
                />
                <Figure.Caption className="text-center">
                  <h1 id="username">{userName2}</h1>
                </Figure.Caption>
              </Figure>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto">
            <p style={{ color: "white" }}>{userBio2}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header2;
