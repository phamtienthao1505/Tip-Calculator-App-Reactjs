import React from "react";
import { Display, Typing } from "../components";
import "./calculator.scss";

const Calculator = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo">
          <img src="./assets/icons/logo.svg" alt="logo" />
        </div>
        <Typing />
        <Display />
      </div>
    </React.Fragment>
  );
};

export default Calculator;
