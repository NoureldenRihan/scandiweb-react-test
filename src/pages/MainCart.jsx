import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";

class MainCart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>Cart</h1>
      </React.Fragment>
    );
  }
}

export default MainCart;
