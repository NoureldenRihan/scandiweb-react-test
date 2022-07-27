import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import CartItemBreaker from "../CartItemBreaker/CartItemBreaker";
import { setArrangedCart } from "../redux/actions/actions";
class Cart extends Component {
  state = {
    cartArrangedData: [],
  };

  setupCartItems = () => {
    let filteredData = [];
    let data = this.props.cartData;
    let added = false;
    if (data.length === 0) {
      return;
    }
    data.forEach((item) => {
      added = false;
      if (filteredData.length === 0) {
        filteredData.push({
          quantity: 1,
          data: item,
        });
        added = true;
      } else {
        filteredData.forEach((mainItem) => {
          if (item.name === mainItem.data.name) {
            if (
              JSON.stringify(item.attributes) ===
              JSON.stringify(mainItem.data.attributes)
            ) {
              if (
                JSON.stringify(item.swatchAttributes) ===
                JSON.stringify(mainItem.data.swatchAttributes)
              ) {
                let mainItemIndex = filteredData.indexOf(mainItem);
                filteredData[mainItemIndex].quantity += 1;
                added = true;
                return;
              }
            }
          }
        });
        if (added === false) {
          filteredData.push({
            quantity: 1,
            data: item,
          });
          return;
        }
      }
    });
    this.setState({
      cartArrangedData: filteredData,
    });
    this.props.arrangeCart(filteredData);
  };

  orderCart = () => {};

  componentDidMount() {
    this.setupCartItems();
  }

  render() {
    return (
      <div className={style.cartHolder}>
        <h1>Cart</h1>
        {this.state.cartArrangedData.map((item) => (
          <CartItem
            key={Math.random()}
            quantity={item.quantity}
            productID={item.data.id}
            data={item.data}
          />
        ))}
        <div className={style.Checkout}>
          <CartItemBreaker />
          <h3>Quantity: {this.props.quantity}</h3>
          <h3>Total: </h3>
          <button className={style.order} onClick={this.orderCart}>
            Order
          </button>
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
  const arrangeCart = (data) => dispatch(setArrangedCart(data));

  return { arrangeCart };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
