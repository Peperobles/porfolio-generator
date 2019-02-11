import React, { Component } from "react";

import "./Hero.css";


export class HeroContainer extends Component {
  render() {
    return (
      <div id="hero">
        <div id="smoke">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h6>Remember</h6>
                <p>
                  <u>"The only way to do great work is to love what you do"</u>
                </p>
                <p>#Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroContainer;
