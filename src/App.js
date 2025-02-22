import React from "react";
import "./App.css";
import Header from "./components/header";
import CalBox from "./components/CalBox";
import Screen from "./components/Screen";

const App = () => {
  return (
    <div className='main-app-container' >
      <Header />
      <CalBox />
    </div>
  );
};
export default App;
