import React, { Component } from "react";
import style from "./NavActions.module.css";

class NavActions extends Component {
  state = {};
  render() {
    return (
      <div className={style.actions}>
        <div className="currency">$</div>
        <div className="currencyChanger">l</div>
        <div className="cartIcon">D</div>
      </div>
    );
  }
}

export default NavActions;
