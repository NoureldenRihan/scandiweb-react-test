import React, { Component } from "react";
import style from "./Logo.module.css";
import { Link } from "react-router-dom";

class Logo extends Component {
  state = {};
  render() {
    return (
      <Link className={style.logo} to="/">
        <div>
          <img
            src={window.location.origin + "/Images & Icons/Logo.png"}
            alt="Logo"
          />
        </div>
      </Link>
    );
  }
}

export default Logo;
