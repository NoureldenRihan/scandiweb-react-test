import React, { Component } from "react";
import style from "./AddToCart.module.css";

class AddToCart extends Component {
  state = {};
  render() {
    return (
      <div className={style.addToCart}>
        <img
          src={window.location.origin + "/Images & Icons/whiteCart.png"}
          alt="Add To Cart"
        />
      </div>
    );
  }
}

export default AddToCart;
