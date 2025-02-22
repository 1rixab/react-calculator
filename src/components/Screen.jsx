import React from "react";
import "./Screen.css";


const Screen = (props) => {
  return <div className={`screen-container ${props.className}`}>
    <p className='screenText'>
    {props.value || 0}
    </p>
  </div>;
};

export default Screen;
