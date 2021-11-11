import React from "react";
import { Display, Typing } from "../components";
import "./calculator.scss";
import logo from "../assets/icons/logo.svg"

const Calculator = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo">
          <img src= {logo} alt="logo" />
        </div>
        <Typing />
        <Display />
      </div>
    </React.Fragment>
  );
};

export default Calculator;
