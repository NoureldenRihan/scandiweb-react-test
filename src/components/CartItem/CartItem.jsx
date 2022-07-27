import React, { Component } from "react";
import style from "./CartItem.module.css";
import CartItemBreaker from "../CartItemBreaker/CartItemBreaker";
import { connect } from "react-redux";
import ChosenAttribute from "../ChosenAttribute/ChosenAttribute";
import { getAttributes } from "../queries/queries";
import ChosenSwatchAttribute from "../ChosenSwatchAttribute/ChosenSwatchAttribute";

class CartItem extends Component {
  state = {
    productData: {},
    currentImg: 1,
    index: 0,
    uniqueID: Math.random(),
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

  moveImg = (direction) => {
    let max = this.props.data.gallery.length;
    let img = document.getElementById(`mainProductImg${this.state.uniqueID}`);
    if (direction === "right") {
      if (this.state.currentImg === max) {
        img.src = this.props.data.gallery[0];
        this.setState({
          index: 0,
          currentImg: 1,
        });
      } else {
        img.src = this.props.data.gallery[this.state.index + 1];
        this.setState({
          index: this.state.index + 1,
          currentImg: this.state.currentImg + 1,
        });
      }
    } else if (direction === "left") {
      if (this.state.currentImg === 1) {
        img.src = this.props.data.gallery[max - 1];
        this.setState({
          index: max - 1,
          currentImg: max,
        });
      } else {
        img.src = this.props.data.gallery[this.state.index - 1];
        this.setState({
          index: this.state.index - 1,
          currentImg: this.state.currentImg - 1,
        });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <CartItemBreaker />
        <div className={style.cartItem}>
          <div className={style.itemData}>
            <h3>{this.props.data.name}</h3>
            <h3 className={style.brand}>{this.props.data.brand}</h3>
            <h3>{this.setCurrency(this.props.currency)}</h3>
            {this.attributesSetup(this.props.data.attributes, "Text")}
            {this.attributesSetup(this.props.data.swatchAttributes, "Swatch")}
          </div>
          <div className={style.itemEdit}>
            <div className={style.quantity}>
              <div className={style.icon}>
                <img
                  src={window.location.origin + "/Images & Icons/plus.png"}
                  alt="Increase Quantity"
                />
              </div>
              <h3>{this.props.quantity}</h3>
              <div className={style.icon}>
                <img
                  src={window.location.origin + "/Images & Icons/minus.png"}
                  alt="Decrease Quantity"
                />
              </div>
            </div>
            <div className={style.gallery}>
              <div className={style.mainImgHolder}>
                <img
                  id={`mainProductImg${this.state.uniqueID}`}
                  className={style.mainImg}
                  src={this.props.data.gallery[0]}
                  alt="Product"
                />
                {this.props.data.gallery.length > 1 ? (
                  <div className={style.galleryNav}>
                    <div
                      className={style.left}
                      onClick={() => this.moveImg("left")}
                    >
                      <img
                        src={
                          window.location.origin +
                          "/Images & Icons/leftcaret.png"
                        }
                        alt="Navigate Left"
                      />
                    </div>
                    <div
                      className={style.right}
                      onClick={() => this.moveImg("right")}
                    >
                      <img
                        src={
                          window.location.origin +
                          "/Images & Icons/rightcaret.png"
                        }
                        alt="Navigate Right"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
