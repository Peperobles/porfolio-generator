import React, { Component } from "react";

import "./Price.css";

export class PriceContainer extends Component {
  render() {
    return (
      <div id="price">
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3">PRICING</h4>
              <h2>1€</h2>
              <p>Per user a Month</p>
              <button className="btn btn-info">Try it</button>
            </div>
          </div>
        </div>
        <div id="priceText" className="container-fluid text-center mt-5 bg-gradient-danger">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 mt-2">
              <p>Try a promising solution, worth your time!</p>
              <p>It's time to stand out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceContainer;
