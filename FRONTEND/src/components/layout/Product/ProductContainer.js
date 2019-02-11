import React, { Component } from "react";

import "./Product.css";

import wave from "../../../assets/img/wave.png";
import phone from "../../../assets/img/phone-flip.png";

export class ProductContainer extends Component {
  render() {
    return (
      <div id="productContainer">
        <div id="coverProductContainer">
          <img src={wave} alt="wave" />
        </div>
        <div id="textContainer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <h4>Employee Well-being Made Simple</h4>
                <p>HOLAasdfasdf</p>
                <button className="btn btn-info">MÁS INFO</button>
              </div>
            </div>
          </div>
        </div>
        <div id="phoneContainer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <img src={phone} alt="wave" />
              </div>
            </div>
          </div>
          {/* <img src={phone} alt="wave" /> */}
        </div>
      </div>
    );
  }
}

export default ProductContainer;
