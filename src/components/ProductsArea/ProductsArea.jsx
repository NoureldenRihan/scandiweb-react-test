import React, { Component } from "react";
import Product from "../Product/Product";
import { getProductsData } from "../queries/queries";
import style from "./ProductsArea.module.css";
import { connect } from "react-redux";

class ProductsArea extends Component {
  state = {
    all: [],
    clothes: [],
    tech: [],
  };

  getData = async () => {
    let temp = await getProductsData(this.props.category);
    this.setState({
      all: temp.products,
      clothes: this.state.all.filter((item) => item.category === "clothes"),
      tech: this.state.all.filter((item) => item.category === "tech"),
    });
  };

  componentDidMount() {
    this.getData();
  }

  setUI = (category) => {
    switch (category) {
      case "tech":
      case "Tech":
        return this.state.tech.map((item) => (
          <Product key={item.id} data={item} />
        ));
      case "clothes":
      case "Clothes":
        return this.state.clothes.map((item) => (
          <Product key={item.id} data={item} />
        ));
      default:
        return this.state.all.map((item) => (
          <Product key={item.id} data={item} />
        ));
    }
  };

  render() {
    return <div className={style.grid}>{this.setUI(this.props.category)}</div>;
  }
}

const mapStateToProps = (state) => {
  const data = {
    ...state.centralState,
  };

  const category = data.category;

  return { category };
};

export default connect(mapStateToProps)(ProductsArea);
