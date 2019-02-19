// import React, { Component } from "react";

import React from "react";

import { useSpring, animated } from "react-spring";

import "./Product.css";

import wave from "../../../assets/img/wave.png";
// import phone from "../../../assets/img/phone-flip.png";
import phonescreen from "../../../assets/img/smartshadow.png";

// export class ProductContainer extends Component {
export default function ProductContainer() {
  const props = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -100 },
    config: { delay: 1000, duration: 1000 }
  });
  // render() {
  return (
    <div id="productContainer" className="pb-5">
      <div id="coverProductContainer">
        <img src={wave} alt="wave" />
      </div>
      <div id="textContainer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h2 id="lineheading"> </h2>
              <h2>Deploy your portfolio Fast</h2>
              <p>Show your skills</p>
              <button className="btn btn-info">Try it today</button>
            </div>
          </div>
        </div>
      </div>
      <animated.div style={props}>
        <div id="phoneContainer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <img src={phonescreen} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
      <div id="steps">
        <div className="container text-center">
          <h2 id="lineheading2"> </h2>
          <h4 className="text-center m-4">EASY STEPS</h4>
          <div className="row justify-content-center m4 p-4 shadow">
            <div className="col-sm-4 p-4">
              <span className="rounded-circle bg-gradient-info p-3">#1</span>
              <h6 className="mt-3">REGISTER</h6>
              <p>Register with e-mail</p>
            </div>
            <div className="col-sm-4 p-4">
              <span className="rounded-circle bg-gradient-info p-3">#2</span>
              <h6 className="mt-3">CREATE PORTFOLIO</h6>
              <p>Fill it with your info</p>
            </div>
            <div className="col-sm-4 p-4">
              <span className="rounded-circle bg-gradient-info p-3">#3</span>
              <h6 className="mt-3">SHARE URL</h6>
              <p>Upload porfolio with a click!</p>
            </div>
          </div>
          <button className="btn btn-outline-light mt-5 p-3">
            Try it today
          </button>
        </div>
      </div>
    </div>
  );
}
