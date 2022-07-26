import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import CartItemBreaker from "../CartItemBreaker/CartItemBreaker";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className={style.cartHolder}>
        <h1>Cart</h1>
        {this.props.cartData.map((item) => (
          <CartItem key={Math.random()} productID={item.id} data={item} />
        ))}
        <div className={style.Checkout}>
          <CartItemBreaker />
          <h3>Quantity: {this.props.quantity}</h3>
          <h3>Total: </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const data = {
    ...state.centralState,
  };

  const cartData = data.cart;
  const quantity = data.quantity;

  return { cartData, quantity };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
