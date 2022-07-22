import React, { Component } from "react";
import style from "./Product.module.css";
import { connect } from "react-redux";
import AddToCart from "../AddToCart/AddToCart";
import Heart from "../Heart/Heart";

class Product extends Component {
  state = {};

  setCurrency = (currency) => {
    switch (currency) {
      case "USD":
        return {};
      case "GBP":
        return {};
      case "AUD":
        return {};
      case "JPY":
        return {};
      case "RUB":
        return {};
      default:
        return {};
    }
  };

  render() {
    return (
      <div className={style.product}>
        <div className={style.imgHolder}>
          <img
            className={style.productImg}
            src={this.props.data.gallery[0]}
            alt={this.props.data.name}
          />
          <AddToCart />
          <Heart />
        </div>
        <h3 className={style.productName}>{this.props.data.name}</h3>
        <h4 className={style.productPrice}>{this.props.data.id}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const data = {
    ...state.centralState,
  };

  const currencySymbol = data.currencySymbol;
  const currency = data.currencyLabel;

  return { currency, currencySymbol };
};

export default connect(mapStateToProps)(Product);
