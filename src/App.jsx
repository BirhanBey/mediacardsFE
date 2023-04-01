import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import React, { useState } from "react";
import "./components/darkmode/darkMode.css";

//☀︎ ☽
function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="mode">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "blue" }}>☽</span>
      </div>
      <div>
        <LoginButton />
        <Header />
        <ListArea />
        <Footer />      
      </div>
    </div>
  );
};
export default App;
