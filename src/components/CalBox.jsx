import { useState, useEffect } from "react";
import React from "react";
import "./CalBox.css";
import CalButton from "./CalButton.jsx";
import Screen from "./Screen.jsx";

const CalBox = (props) => {
  const [displayvalue, setDisplayValue] = useState();

  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "/",
  ];
  let lastresult = [45];

  const handleButtonClick = (e) => {
    setDisplayValue(e.target.innerText);
    lastresult.push(displayvalue);
    console.log(lastresult)
  };

  // useEffect(() => {
  //   lastresult.push(displayvalue);
  //   lastresult.forEach((value) => {
  //     console.log(value);
  //     console.log(lastresult)
  //   });
  // }, [displayvalue]);



  return (
    <div className="Calbox-div">
      <Screen value={lastresult} className="grid-span" />
      {buttons.map((btn, index) => (
        <CalButton key={index} title={btn} onClick={handleButtonClick} />
      ))}
    </div>
  );
};
export default CalBox;
