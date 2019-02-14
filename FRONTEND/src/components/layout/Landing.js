import React, { Component } from "react";

import HeroAnim from "./Hero/HeroAnim"
import ProductAnim from "./Product/ProductAnim"
import IconsBoxAnim from "./IconsBox/IconsBoxAnim"
import PriceAnim from "./Price/PriceAnim"

class Landing extends Component {
  render() {
    return (
      <div>
        <HeroAnim/>
        <ProductAnim/>
        <IconsBoxAnim/>
        <PriceAnim/>
      </div>
    );
  }
}
export default Landing;
