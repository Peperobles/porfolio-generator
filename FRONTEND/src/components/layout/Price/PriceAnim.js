import React from "react";
import { useSpring, animated } from "react-spring";

import PriceContainer from "./PriceContainer";

export default function PriceAnim() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // config: { delay: 2000, duration: 2000 }
  });
  return (
    <animated.div style={props}>
      <PriceContainer />
    </animated.div>
  );
}