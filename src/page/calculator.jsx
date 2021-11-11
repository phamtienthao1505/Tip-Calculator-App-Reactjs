/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React from "react";
//import { Display, Typing } from "../components";
import icon_person from "../assets/icons/icon-person.svg";
import icon_dollar from "../assets/icons/icon-dollar.svg";
import "../components/display/display.scss";
import "../components/typing/typing.scss";
import "./calculator.scss";
import logo from "../assets/icons/logo.svg";

let tipAmount = 12.45;
let total = 11.548854;

const Calculator = () => {
  const [data, setData] = React.useState({
    billValue: "0.0",
    tipValue: "0.15",
    peopleValue: "1",
  });

  const [result, setResult] = React.useState({
    tipAmount: "0",
    total: "0",
  });

  const calculateTip = () => {
    if (data.peopleValue >= 1) {
      result.tipAmount = ((billValue * tipValue) / peopleValue).toFixed(2);
      result.total = ((billValue * (tipValue + 1)) / peopleValue).toFixed(2);
    }
  };
  const validateFloat = (s) => {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s?.match(rgx);
  };

  const validateInt = (s) => {
    var rgx = /^[0-9]*$/;
    return s?.match(rgx);
  };
  const changeValueInputBill = () => {
    setData.billValue = data.billValue;
  };
  const setBillValue = () => {
    if (data.billValue.value?.includes(",")) {
      data.billValue.value = data.billValue.replace(",", ".");
    }

    if (!validateFloat(data.billValue.value)) {
      data.billValue.value = data.billValue.value?.substring(
        0,
        data.billValue.length - 1
      );
    }

    billValue = parseFloat(data.billValue);

    calculateTip();
  };
  const handleClick = (event) => {
    tipBtns.forEach((btn) => {
      //clear active state
      btn.classList.remove("btn-active");

      //set active state
      if (event.target.innerHTML == btn.innerHTML) {
        btn.classList.add("btn-active");
        tipValue = parseFloat(btn.innerHTML) / 100;
      }
    });

    //clear custom tip
    tipCustom.value = "";

    calculateTip();
  };
  const setTipCustomValue = () => {
    if (!validateInt(tipCustom.value)) {
      tipCustom.value = tipCustom.value.substring(
        0,
        tipCustom.value.length - 1
      );
    }

    tipValue = parseFloat(tipCustom.value / 100);

    //remove active state from buttons
    tipBtns.forEach((btn) => {
      btn.classList.remove("btn-active");
    });

    if (tipCustom.value !== "") {
      calculateTip();
    }
  };
  const setPeopleValue = () => {
    if (!validateInt(people.value)) {
      people.value = people.value.substring(0, people.value.length - 1);
    }

    peopleValue = parseFloat(people.value);

    if (peopleValue <= 0) {
      errorMsg.classList.add("show-error-msg");
      setTimeout(function () {
        errorMsg.classList.remove("show-error-msg");
      }, 3000);
    }

    calculateTip();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="input">
          <div className="bill-container">
            <div className="label-wrapper">
              <label htmlFor="inp-bill">Bill</label>
            </div>
            <div className="inp-wrapper">
              <input
                value={changeValueInputBill}
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
        <div className="output">
          <div className="line-wrapper">
            <div className="line-output">
              <div className="title-wrapper">
                <div className="title">Tip Amount</div>
                <div className="desc">/ person</div>
              </div>
              <div className="value">${tipAmount}</div>
            </div>
            <div className="line-output">
              <div className="title-wrapper">
                <div className="title">Total</div>
                <div className="desc">/ person</div>
              </div>
              <div className="value">${total}</div>
            </div>
          </div>
          <div className="btn reset">Reset</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
