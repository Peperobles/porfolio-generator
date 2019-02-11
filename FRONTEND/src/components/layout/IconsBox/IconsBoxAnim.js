import React from "react";
import { useSpring, animated } from "react-spring";

import IconsBoxContainer from "./IconsBoxContainer";

// import "./Hero.css";

export default function IconsBoxAnim() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // config: { delay: 2000, duration: 2000 }
  });
  return (
    <animated.div style={props}>
      <IconsBoxContainer />
    </animated.div>
  );
}