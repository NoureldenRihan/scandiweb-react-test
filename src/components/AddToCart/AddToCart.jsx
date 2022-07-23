import React, { Component } from "react";
import style from "./AddToCart.module.css";
import { Link } from "react-router-dom";

class AddToCart extends Component {
  state = {
    urlPath: `/product/${this.props.id}`,
  };
  render() {
    return (
      <Link to={this.state.urlPath}>
        <div className={style.addToCart}>
          <img
            src={window.location.origin + "/Images & Icons/whiteCart.png"}
            alt="Add To Cart"
          />
        </div>
      </Link>
    );
  }
}

export default AddToCart;
