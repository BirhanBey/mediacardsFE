import React from "react";
import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";

const App = () => {
  return (
    <div>
      <LoginButton />
      <Header />
      <ListArea />
      <Footer />
    </div>
  );
};

export default App;
