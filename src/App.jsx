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
// import { useNavigate } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [token, setToken] = useState("");
  const [userImage, setUserImage] = useState("");
  const [rerender, setRerender] = useState(0);
  const icons = [<FaYoutube />, <FaTwitter />, <FaFacebook />];
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState("");
  const [newColor, setNewcolor] = useState("");
  // const navigate = useNavigate();

  const colors = [
    "#2d3436",
    "#be2edd",
    "#f9ca24",
    "#6ab04c",
    "#3b579d",
    "#1da0f1",
    "#ff0000",
  ];
  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    // setTheme(currentColor);

    console.log("current color " + currentColor);
  }, []);

  // const setTheme = (color) => {
  //   document.documentElement.style.setProperty("--bg-color", color);
  // };
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    console.log("current color " + currentColor);

    setNewcolor(currentColor);

    localStorage.setItem("color", currentColor);
  };

  const handleIconChange = (icon) => {
    setSelectedIcon(icon);
    localStorage.setItem("selectedIcon", JSON.stringify(icon));
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedUserName = localStorage.getItem("userName");
    const storedUserBio = localStorage.getItem("userBio");
    const darkModeSetting = localStorage.getItem("darkMode");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setLoggedIn(true);
      setUserId(storedUserId);
      setUserEmail(storedUserEmail);
      setUserName(storedUserName);
      setUserBio(storedUserBio);
      setDarkMode(JSON.parse(darkModeSetting));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userBio", userBio);
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userBio");
    }
  }, [loggedIn, token, userId, userEmail, userName, userBio, darkMode]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRerender = () => {
    setRerender(rerender + 1);
    console.log("rerendered");
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
    setLoggedOut(true);
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

  const handleBackgroundChange = (imageUrl) => {
    setSelectedBackgroundImage(imageUrl);
    localStorage.setItem("backgroundImage", imageUrl);
  };
  useEffect(() => {
    const storedBackgroundImage = localStorage.getItem("backgroundImage");
    if (storedBackgroundImage) {
      setSelectedBackgroundImage(storedBackgroundImage);
    }
  }, []);

  // useEffect(() => {
  //   if (userName) {
  //     navigate(`/${userName}`);
  //   }
  // }, [userName, navigate]);

  useEffect(() => {
    setRerender(rerender + 1);
  }, [userName, userBio]);

  return (
    <div
      style={{
        backgroundImage: `url(${selectedBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      }}
    >
      <div
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{ height: "75rem" }}
      >
        {!loggedIn ? (
          <NotLoggedIn
            handleLogin={handleLogin}
            setToken={setToken}
            loggedOut={loggedOut}
          />
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
                    checked={darkMode}
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
                    backgroundColor: darkMode ? "#212529" : "transparent",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    fill={darkMode ? "white" : "black"}
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <br />
                {/* {loggedIn && (
                 
                )} */}
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
                        <Button
                          variant={darkMode ? "secondary" : "dark"}
                          onClick={handleLogout}
                        >
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
                      handleUserImageChange={handleUserImageChange}
                      handleBackgroundChange={handleBackgroundChange}
                      setImageUrl={handleUserImageChange}
                      handleRerender={handleRerender}
                      setUserName={setUserName}
                      setUserBio={setUserBio}
                      userName={userName}
                      userBio={userBio}
                      darkMode={darkMode}
                    />
                    <span
                      className="ms-2"
                      style={{ color: darkMode ? "white" : "black" }}
                    >
                      Logged in as {userName}
                    </span>
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
              setUserName={setUserName}
              setUserBio={setUserBio}
              loggedIn={loggedIn}
            />

            <ListArea
              userId={userId}
              token={token}
              rerender={rerender}
              handleRerender={handleRerender}
              selectedIcon={selectedIcon}
              handleIconChange={handleIconChange}
              icons={icons}
              colors={colors}
              setColor={setColor}
              newColor={newColor}
            />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
