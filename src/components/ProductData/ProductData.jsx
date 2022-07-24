import React, { Component } from "react";
import { getProduct } from "../queries/queries";
import style from "./ProductData.module.css";
import parse from "html-react-parser";
import { connect } from "react-redux";
import Size from "../Size/Size";

class ProductData extends Component {
  state = {
    productData: {},
  };

  getData = async () => {
    let temp = await getProduct(window.location.href.split("/")[4]);
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
        if (this.state.productData.prices !== undefined) {
          chosenCurrency = this.state.productData.prices.filter(
            (item) => item.currency.label === this.props.currency
          );
          return `${this.props.currencySymbol}${chosenCurrency[0].amount}`;
        } else {
          return;
        }
    }
  };

  attributesSetup = (product) => {
    let data = "";
    if (product !== undefined) {
      data = product.filter((item) => item.id === "Size");
    }
    return <Size data={data[0]} />;
  };

  setImg = (e) => {
    let src = e.target.src;
    document.getElementById("MainImg").src = src;
  };

  render() {
    const data = this.state.productData;
    const description = `${data.description}`;
    const parsedDescription = parse(description);
    const productAttributes = data.attributes;

    return (
      <div className={style.productArea}>
        {console.log(this.state.productData)}
        <div className={style.imgs}>
          {data.gallery !== undefined
            ? data.gallery.map((item) => (
                <img
                  src={item}
                  alt={data.id}
                  key={Math.random()}
                  onClick={this.setImg}
                />
              ))
            : ""}
        </div>
        <div className={style.mainImgHolder}>
          {data.gallery !== undefined ? (
            <img
              id="MainImg"
              className={style.mainImg}
              src={data.gallery[0]}
              alt="Main Product"
            />
          ) : (
            ""
          )}
        </div>
        <div className={style.details}>
          <h2>{data.name}</h2>
          <h3>{data.brand}</h3>
          {this.attributesSetup(productAttributes)}
          <h3>Color</h3>
          <h3>{this.setCurrency(this.props.currency)}</h3>
          <button className={style.cartAdd}>Add to Cart</button>
          {parsedDescription}
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
  const currency = data.currencyLabel;

  return { currency, currencySymbol };
};

export default connect(mapStateToProps)(ProductData);
