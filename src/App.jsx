import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import React, { useState } from "react";
import RegisterModal from "./components/RegisterModal";
import "./components/darkmode/darkMode.css";
import UserSettings from "./components/userSettings/UserSettings";

//☀︎ ☽
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
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
      <div>
        <div className="d-flex justify-content-end">
          <LoginButton />
          <RegisterModal />
          <UserSettings />
        </div>
        <Header />
        <ListArea />
        <Footer />
      </div>
    </div>
  );
}
export default App;
