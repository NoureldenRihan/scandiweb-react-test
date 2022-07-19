import React, { Component } from "react";
import style from "./NavFilters.module.css";

class NavFilters extends Component {
  state = {};
  render() {
    return (
      <div className={style.filters}>
        <h2>All</h2>
        <h2>Tech</h2>
        <h2>jss</h2>
      </div>
    );
  }
}

export default NavFilters;
