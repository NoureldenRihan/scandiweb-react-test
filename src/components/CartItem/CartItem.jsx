import React, { Component } from "react";
import style from "./CartItem.module.css";
import CartItemBreaker from "../CartItemBreaker/CartItemBreaker";
import { connect } from "react-redux";
import SwatchAttribute from "../SwatchAttribute/SwatchAttribute";
import ChosenAttribute from "../ChosenAttribute/ChosenAttribute";
import { getAttributes } from "../queries/queries";
import ChosenSwatchAttribute from "../ChosenSwatchAttribute/ChosenSwatchAttribute";

class CartItem extends Component {
  state = {
    productData: {},
  };

  getData = async () => {
    let temp = await getAttributes(this.props.productID);
    this.setState({
      productData: temp,
    });
  };

  componentDidMount() {
    this.getData();
  }

  setCurrency = (currency) => {
    let chosenCurrency = "";
    switch (currency) {
      default:
        chosenCurrency = this.props.data.prices.filter(
          (item) => item.currency.label === this.props.currency
        );
        return `${this.props.currencySymbol}${chosenCurrency[0].amount}`;
    }
  };

  attributesSetup = (product, type) => {
    if (product !== undefined) {
      if (type === "Text") {
        return product.map((item) => (
          <ChosenAttribute
            key={Math.random()}
            data={this.state.productData}
            chosen={item}
          />
        ));
      } else if (type === "Swatch") {
        return product.map((item) => (
          <ChosenSwatchAttribute
            key={Math.random()}
            data={this.state.productData}
            chosen={item}
          />
        ));
      }
    }
  };

  render() {
    return (
      <div className={style.cartItem}>
        <CartItemBreaker />
        <div className={style.itemData}>
          <h3>{this.props.data.name}</h3>
          <h3 className={style.brand}>{this.props.data.brand}</h3>
          <h3>{this.setCurrency(this.props.currency)}</h3>
          {this.attributesSetup(this.props.data.attributes, "Text")}
          {this.attributesSetup(this.props.data.swatchAttributes, "Swatch")}
        </div>
        <div className={style.itemEdit}></div>
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

export default connect(mapStateToProps)(CartItem);
