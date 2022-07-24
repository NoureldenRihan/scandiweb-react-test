import React, { Component } from "react";
import style from "./Size.module.css";

class Size extends Component {
  state = {};

  select = (e) => {
    document.querySelectorAll(".option").forEach((item) => {
      item.classList.remove(`${style.selected}`);
      item.classList.remove(`selectedAttribute`);
    });
    e.target.classList.add(`${style.selected}`);
    e.target.classList.add(`selectedAttribute`);
    e.target.classList.remove(`${style.size}`);
  };

  render() {
    return (
      <div className={style.sizeContainer}>
        <h3>Size:</h3>
        <div className={style.sizeHolder}>
          {this.props.data !== undefined
            ? this.props.data.items.map((item) => (
                <h3
                  key={item.displayValue}
                  className={`${style.size} option`}
                  data-value={item.displayValue}
                  onClick={this.select}
                >
                  {item.value}
                </h3>
              ))
            : "1"}
        </div>
      </div>
    );
  }
}

export default Size;
