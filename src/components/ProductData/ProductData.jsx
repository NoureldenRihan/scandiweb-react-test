import React, { Component } from "react";
import style from "./ProductData.module.css";

class ProductData extends Component {
  state = {};
  render() {
    return (
      <div className={style.productArea}>
        <div className={style.imgs}>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={style.mainImg}>
          <img src="" alt="" />
        </div>
        <div className={style.details}>
          <h2>Name</h2>
          <h3>brand</h3>
          <h3>Size</h3>
          <h3>Color</h3>
          <h3>Price</h3>
          <button>Add to Cart</button>
          <h3>Desc</h3>
        </div>
      </div>
    );
  }
}

export default ProductData;
