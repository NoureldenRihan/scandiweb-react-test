import React, { Component } from "react";
import style from "./Heart.module.css";

class Heart extends Component {
  state = {
    heartSrc: "heart.png",
  };

  changeHeart = () => {
    if (this.state.heartSrc === "heart.png") {
      this.setState({
        heartSrc: "redheart.png",
      });
    } else {
      this.setState({
        heartSrc: "heart.png",
      });
    }
  };

  render() {
    return (
      <div className={style.heart} onClick={this.changeHeart}>
        <img
          src={
            window.location.origin + `/Images & Icons/${this.state.heartSrc}`
          }
          alt="Heart"
        />
      </div>
    );
  }
}

export default Heart;
