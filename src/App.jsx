import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import React, { useState, useEffect } from "react";
import RegisterModal from "./components/RegisterModal";
import NotLoggedIn from "./components/NotLoggedIn";
import "./components/darkmode/darkMode.css";
import UserSettings from "./components/userSettings/UserSettings";
import { Row, Container, Col, Button, Offcanvas, Stack } from "react-bootstrap";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [token, setToken] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [loggedIn, token]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (data) => {
    setLoggedIn(true);
    setUserId(data.user.id);
    setUserName(data.user.userName);
    setUserEmail(data.user.email);
    setUserBio(data.user.description);
    setToken(data.token);

    localStorage.setItem("userId", data.user.id);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserEmail("");
    setToken("");
    setUserId(null);

    localStorage.removeItem("userId");
  };

  const handleUserImageChange = (imageUrl) => {
    setUserImage(imageUrl);
  };

  return (
    <>
      {!loggedIn ? (
        <NotLoggedIn handleLogin={handleLogin} setToken={setToken} />
      ) : (
        <div className={darkMode ? "dark-mode mt-5" : "light-mode mt-6"} style={{height: '100%'}}>
          <div className="mode me-2">
            <span
              className="sunmoon"
              style={{ color: darkMode ? "grey" : "yellow" }}
            >

              ☀︎
            </span>
            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
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

          <Container
            fluid
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fillRule="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
                onClick={handleShow}
                id="hamburger"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              {/* <Button variant="dark">Menu</Button> */}
              {loggedIn && (
                <span className="ms-3" style={{ color: "blue" }}>
                  Logged in as {userEmail}
                </span>
              )}
            </div>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Stack gap={3}>
                  {loggedIn ? (
                    <>
                      <Button variant="secondary" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <LoginButton
                        handleLogin={handleLogin}
                        setToken={setToken}
                      />
                      <RegisterModal />
                    </>
                  )}
                  <UserSettings
                    userId={userId}
                    token={token}
                    setImageUrl={handleUserImageChange}
                  />
                </Stack>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>

          <Header
            userId={userId}
            userName={userName}
            userBio={userBio}
            setUserImage={handleUserImageChange}
          />

          <ListArea userId={userId} token={token} />

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
