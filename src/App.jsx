import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import React, { useState } from "react";
import RegisterModal from "./components/RegisterModal";
import "./components/darkmode/darkMode.css";
import UserSettings from "./components/userSettings/UserSettings";
import { Row, Container, Col, Button, Offcanvas, Stack } from "react-bootstrap";

//☀︎ ☽
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* DARK MODE */}{" "}
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="mode me-2">
          <span
            className="sunmoon"
            style={{ color: darkMode ? "grey" : "yellow" }}
          >
            ☀︎
          </span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span
            className="sunmoon"
            style={{ color: darkMode ? "#c96dfd" : "blue" }}
          >
            ☽
          </span>
        </div>

        {/* OFF CANVAS */}
        <Button variant="primary" onClick={handleShow}>
          Menu
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              <LoginButton />
              <RegisterModal />
              <UserSettings />
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>

        <Header />
        <ListArea />
        <Footer />
      </div>
    </>
  );
}
export default App;
