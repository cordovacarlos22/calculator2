import React from "react";
import '../stylesheets/Screen.css'

export const  Screen  = ({numInput}) => {
  return(
    <div className="screenInput">
      {numInput}
    </div>
  );
}