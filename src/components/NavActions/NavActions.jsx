import React, { Component } from "react";
import style from "./NavActions.module.css";
import { getCurrencies } from "../queries/queries";
import { connect } from "react-redux";
import { setCurrency } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import OverlayCart from "../OverlayCart/OverlayCart";

class NavActions extends Component {
  state = {
    currencies: [],
  };

  showCurrencyModel = () => {
    let model = document.getElementById("optionsModel");
    let overlay = document.getElementById("optionsOverlay");
    if (model.classList.contains("hidden")) {
      model.style.display = "block";
      model.classList.remove("hidden");
      overlay.style.display = "block";
      overlay.classList.remove("hidden");
    } else {
      model.style.display = "none";
      model.classList.add("hidden");
      overlay.style.display = "none";
      overlay.classList.add("hidden");
    }
  };

  setCurrencyData = (e) => {
    const chosenSymbol = e.target.dataset.symbol;
    const chosenLabel = e.target.dataset.label;

    this.props.setNewCurrency(chosenSymbol, chosenLabel);
    document.getElementById("optionsModel").style.display = "none";
    document.getElementById("optionsModel").classList.add("hidden");
    document.getElementById("optionsOverlay").style.display = "none";
    document.getElementById("optionsOverlay").classList.add("hidden");
  };

  cart = (state) => {
    if (state === "open") {
      document.querySelectorAll(".overlayItem").forEach((item) => {
        item.style.display = "block";
      });
    } else if (state === "close") {
      document.querySelectorAll(".overlayItem").forEach((item) => {
        item.style.display = "none";
      });
    }
  };

  getData = async () => {
    let temp = await getCurrencies();
    this.setState({
      currencies: temp,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className={style.actions}>
        <div className="currencyArea">
          <h3 id="currency" className="currency">
            {this.props.currencySymbol}
          </h3>
        </div>
        <div className={style.currencyChanger}>
          <img
            onClick={this.showCurrencyModel}
            src={window.location.origin + "/Images & Icons/arrow.png"}
            alt="Choose Currency Caret"
          />
          <div
            id="optionsOverlay"
            className={`${style.currencyOverlay} hidden`}
            onClick={this.showCurrencyModel}
          ></div>
          <div id="optionsModel" className={`${style.currencyOptions} hidden`}>
            <ul>
              {this.state.currencies.map((item) => (
                <li
                  key={item.symbol}
                  id={item.symbol}
                  data-label={item.label}
                  data-symbol={item.symbol}
                  onClick={this.setCurrencyData}
                >
                  {`${item.symbol} ${item.label}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.cartArea}>
          {this.props.quantity === 0 ? (
            <div
              className={style.cartIcon}
              data-quantity={this.props.quantity}
              onClick={() => this.cart("open")}
            >
              <img
                src={window.location.origin + "/Images & Icons/cart.png"}
                alt="Cart Icon"
              />
            </div>
          ) : (
            <div
              className={`${style.cartIcon} ${style.fullCart}`}
              data-quantity={this.props.quantity}
              onClick={() => this.cart("open")}
            >
              <img
                src={window.location.origin + "/Images & Icons/cart.png"}
                alt="Cart Icon"
              />
            </div>
          )}
          <div className={style.overlayCartHolder}></div>
          <div className={`${style.overlayCart} overlayItem`}>
            <OverlayCart />
          </div>
          <div className={`${style.overlay1} overlayItem`}></div>
          <div
            className={`${style.overlay2} overlayItem`}
            onClick={() => this.cart("close")}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const data = {
    ...state.centralState,
  };

  const currencySymbol = data.currencySymbol;
  const quantity = data.quantity;

  return { currencySymbol, quantity };
};

const mapDispatchToProps = (dispatch) => {
  const setNewCurrency = (symbol, label) =>
    dispatch(setCurrency(symbol, label));

  return { setNewCurrency };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavActions);
