import React from "react";
import '../stylesheets/ButtonClear.css'

export const ButtonClear = (props) => {
  return(
    <div className="btnContainer">
    {props.children}
  </div>
  );
}