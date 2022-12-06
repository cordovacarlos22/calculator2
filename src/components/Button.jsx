import React from "react";
import './stylesheets/Buttons.css'
export const Button = (props) =>{
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  };
  return(
    <div className={`container-button ${isOperator(props.children)? 'operator' : '' }`.trimEnd()}>
    {
      props.children
    }
  </div>)
  };