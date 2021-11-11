import React from "react";
import "./display.scss";

function Display() {
  return (
    <div className="output">
      <div className="line-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$0.00</div>
        </div>
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$0.00</div>
        </div>
      </div>
      <div className="btn reset">Reset</div>
    </div>
  );
}

export default Display;
