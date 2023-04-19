import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import React, { useState, useEffect } from "react";
import RegisterModal from "./components/RegisterModal";
import NotLoggedIn from "./components/NotLoggedIn";
import "./components/darkmode/darkMode.scss";
import UserSettings from "./components/userSettings/UserSettings";
import { Row, Container, Col, Button, Offcanvas, Stack } from "react-bootstrap";
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

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
  const [rerender, setRerender] = useState(0);

  const icons = [<FaYoutube />, <FaTwitter />, <FaFacebook />];
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconChange = (icon) => {
    setSelectedIcon(icon);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedUserName = localStorage.getItem("userName");
    const storedUserBio = localStorage.getItem("userBio");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setLoggedIn(true);
      setUserId(storedUserId);
      setUserEmail(storedUserEmail);
      setUserName(storedUserName);
      setUserBio(storedUserBio);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userBio", userBio);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userBio");
    }
  }, [loggedIn, token, userId, userEmail, userName, userBio]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRerender = () => {
    setRerender(rerender + 1);
  };

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
    setUserName("");
    setUserBio("");

    localStorage.removeItem("userId");
  };

  const handleUserImageChange = (imageUrl) => {
    setUserImage(imageUrl);
  };

  return (
    <div
      className={darkMode ? "dark-mode h-100" : "light-mode"}
      style={{ height: "100%" }}
    >
      {!loggedIn ? (
        <NotLoggedIn handleLogin={handleLogin} setToken={setToken} />
      ) : (
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
            <div className="menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fillRule="currentColor"
                className="bi bi-list rounded"
                viewBox="0 0 16 16"
                onClick={handleShow}
                id="hamburger"
                style={{
                  backgroundColor: darkMode ? "#212529" : "white",
                  color: darkMode ? "white" : "black",
                }}
              >
                <path
                  fill-rule="evenodd"
                  fill={darkMode ? "white" : "black"}
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <br />
              {loggedIn && (
                <span
                  className="ms-2"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Logged in as {userEmail}
                </span>
              )}
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              className={darkMode ? "dark-mode" : "light-mode"}
              style={{
                backgroundColor: darkMode ? "#212529" : "white",
                color: darkMode ? "white" : "black",
                position: "absolute",
              }}
            >
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
            rerender={rerender}
            handleRerender={handleRerender}
          />

          <ListArea
            userId={userId}
            token={token}
            rerender={rerender}
            handleRerender={handleRerender}
            selectedIcon={selectedIcon}
            handleIconChange={handleIconChange}
            icons={icons}
          />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
