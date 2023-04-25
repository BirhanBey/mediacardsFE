import React from "react";
import RegisterModal from "./RegisterModal";
import LoginButton from "./LoginButton";
import { Container, Card, Row, Col, Navbar, Stack } from "react-bootstrap/";
import GuestCards from "./GuestCards";

const NotLoggedIn = ({ handleLogin, setToken, loggedOut, userId2, userId }) => {
  return (
    <div>
      <Navbar
        className="sticky-top absolute"
        bg="dark"
        variant="dark"
        style={{
          top: 0,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3">
            OhMyCard!
          </Navbar.Brand>
          {userId2 ? (
            <div>
              <LoginButton handleLogin={handleLogin} setToken={setToken} />
              <RegisterModal />
            </div>
          ) : null}
        </Container>
      </Navbar>
      <Container id="landing-container" style={{ height: "10rem"}} >
        <Stack className="align-items-center">
          <div className="flex-grow-1"></div>
          {userId2 ? (
            <GuestCards userId2={userId2} userId={userId} />
          ) : (
            <Stack direction="row" className="align-items-center">
              {loggedOut ? (
                <h1 style={{paddingTop: "300px"}} id="welcome">See you soon! </h1>
              ) : (
                <h1 style={{paddingTop: "300px"}} id="welcome">Welcome!</h1>
              )}
              <div style={{ margin: "20px 0" }}>
                <LoginButton handleLogin={handleLogin} setToken={setToken} />
                <RegisterModal />
              </div>
            </Stack>
          )}
          <div className="flex-grow-1"></div>
        </Stack>
      </Container>
    </div>
  );
};

export default NotLoggedIn;
