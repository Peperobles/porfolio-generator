import React from "react";
import { useSpring, animated } from "react-spring";

import ProductContainer from "./ProductContainer";
// import "./Hero.css";

export default function Hero() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // config: { delay: 2000, duration: 2000 }
  });
  return (
    <animated.div style={props}>
      <ProductContainer />
    </animated.div>
  );
}