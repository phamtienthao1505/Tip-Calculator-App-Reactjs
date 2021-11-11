import React from "react";
import "./typing.scss";
import icon_person from "../../assets/icons/icon-person.svg"
import icon_dollar from "../../assets/icons/icon-dollar.svg"

function Typing() {
  return (
    <div className="input">
      <div className="bill-container">
        <div className="label-wrapper">
          <label htmlFor="inp-bill">Bill</label>
        </div>
        <div className="inp-wrapper">
          <input
            className="inp-text"
            type="text"
            name="inp-bill"
            id="inp-bill"
            placeholder={0.0}
          />
          <img src={icon_dollar} alt="dollar-icon" />
        </div>
      </div>
      <div className="tip-container">
        <div className="label-wrapper">
          <label htmlFor="inp-tip">Select Tip %</label>
        </div>
        <div className="btn-wrapper">
          <div className="btn tip">5%</div>
          <div className="btn tip">10%</div>
          <div className="btn tip btn-active">15%</div>
          <div className="btn tip">25%</div>
          <div className="btn tip">50%</div>
          <input
            className="inp-text"
            type="text"
            name="inp-tip"
            id="inp-tip"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="people-container">
        <div className="label-wrapper">
          <label htmlFor="inp-people">Number of People</label>
          <div className="error-msg">Can't be zero</div>
        </div>
        <div className="inp-wrapper">
          <input
            className="inp-text"
            type="text"
            name="inp-people"
            id="inp-people"
            placeholder={1}
          />
          <img src={icon_person} alt="person-icon" />
        </div>
      </div>
    </div>
  );
}

export default Typing;
