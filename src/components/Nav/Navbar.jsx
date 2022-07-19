import React, { Component } from "react";
import Logo from "../Logo/Logo";
import NavActions from "../NavActions/NavActions";
import NavFilters from "../NavFilters/NavFilters";
import style from "./Navbar.module.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav className={style.nav}>
          <NavFilters />
          <Logo />
          <NavActions />
        </nav>
      </div>
    );
  }
}

export default Navbar;