import React, { Component } from "react";
import style from "./Logo.module.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div className={style.logo}>
        <img
          src={window.location.origin + "/Images & Icons/Logo.png"}
          alt="Logo"
        />
      </div>
    );
  }
}

export default Logo;
