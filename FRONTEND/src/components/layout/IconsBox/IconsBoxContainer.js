import React, { Component } from "react";

import "./Icons.css";

export class IconsBoxContainer extends Component {
  render() {
    return (
      <div id="iconsBox">
        <div className="container text-center shadow p-3">
          <h2 id="lineheading2"> </h2>

          <h4 className="text-center mb-5">OUR GOALS</h4>
          <div className="row mt-4">
            <div className="col-lg-3 ">
              <div className="m-1 p-5 border" >
                <i className="mdi mdi-center-focus-weak mdi-4x iconColored" />
                <h6>FOCUS</h6>
                <p>On what matters</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="m-1 p-5 border">
                <i className="mdi mdi-slideshow mdi-4x iconColored" />
                <h6>SHOW</h6>
                <p>Show your skills</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="m-1 p-5 border">
                <i className="mdi mdi-access-time mdi-4x iconColored" />
                <h6>TIME</h6>
                <p>Don't waste time</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="m-1 p-5 border">
                <i className="mdi mdi-timeline mdi-4x iconColored" />
                <h6>SHINE</h6>
                <p>Be the one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconsBoxContainer;
