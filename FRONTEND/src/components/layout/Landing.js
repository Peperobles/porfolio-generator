import React, { Component } from "react";

import HeroAnim from "./Hero/HeroAnim"
import ProductAnim from "./Product/ProductAnim"
import IconsBoxAnim from "./IconsBox/IconsBoxAnim"
import PriceAnim from "./Price/PriceAnim"

// import { Link } from "react-router-dom";    ********************** NO BORRAR VER COMO ESTA REGISTER Y LOGIN **********************

class Landing extends Component {
  render() {
    return (
      <div>
        <HeroAnim/>
        <ProductAnim/>
        <IconsBoxAnim/>
        <PriceAnim/>
      </div>



      // NO BORRAR VER COMO TIENE EL RGISTER Y EL LOGIN
      /*
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col text-center">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="text-info">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <Link to="/register">
              <button className="btn btn-primary m-3">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary m-3">Log In</button>
            </Link>
          </div>
        </div>
      </div>
      */
    );
  }
}
export default Landing;
