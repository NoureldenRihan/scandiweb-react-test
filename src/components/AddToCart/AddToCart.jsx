import React, { Component } from "react";
import style from "./AddToCart.module.css";
import { Link } from "react-router-dom";
import { setCartItem } from "../redux/actions/actions";
import { connect } from "react-redux";

class AddToCart extends Component {
  state = {
    urlPath: `/product/${this.props.id}`,
  };

  setCart = () => {
    let data = this.props.productData;
    let product = {
      id: data.id,
      name: data.name,
      brand: data.brand,
      prices: data.prices,
      gallery: data.gallery,
      attributes: [],
      swatchAttributes: [],
    };

    this.props.addToCart(product);
  };

  render() {
    if (this.props.data.attributes !== undefined) {
      return (
        <React.Fragment>
          {this.props.data.attributes.length !== 0 ? (
            <Link to={this.state.urlPath}>
              <div className={style.addToCart}>
                <img
                  src={window.location.origin + "/Images & Icons/whiteCart.png"}
                  alt="Add To Cart"
                />
              </div>
            </Link>
          ) : (
            <div className={style.addToCart} onClick={this.setCart}>
              <img
                src={window.location.origin + "/Images & Icons/whiteCart.png"}
                alt="Add To Cart"
              />
            </div>
          )}
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapdispatchToProps = (dispatch) => {
  const addToCart = (product) => dispatch(setCartItem(product));

  return { addToCart };
};

export default connect(mapStateToProps, mapdispatchToProps)(AddToCart);
