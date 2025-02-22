import React from "react";
import "./CalButton.css";
const CalButton = (props) => {
  return (
    <button className={`button-box ${props.className}`} onClick={props.onClick}>
      <p className="btn-text">{props.title}</p>
    </button>
  );
};

export default CalButton;
