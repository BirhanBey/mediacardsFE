import React from "react";
import RegisterModal from "./RegisterModal";
import LoginButton from "./LoginButton";
import { Container, Card, Row, Col, Navbar, Stack } from "react-bootstrap/";

const NotLoggedIn = ({ handleLogin, setToken, loggedOut }) => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          position: "-webkit-sticky",
          top: 0,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3">
            Our Brandname
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container id="landing-container">
        <Stack className="align-items-center">
          <div className="flex-grow-1"></div>
          <Stack direction="row" gap={3} className="align-items-center">
            {loggedOut ? (
              <h1 id="welcome">See you soon! </h1>
            ) : (
              <h1 id="welcome">Welcome!</h1>
            )}
            <div>
              <LoginButton handleLogin={handleLogin} setToken={setToken} />
              <RegisterModal />
            </div>
          </Stack>
          <div className="flex-grow-1"></div>
        </Stack>
      </Container>
    </div>
  );
};

export default NotLoggedIn;
