import React from "react";
import { useSpring, animated } from "react-spring";

// import HeroContainer from "./HeroContainer";  /////////////////// DECIDIR SI ME QUEDO EL ESTILO COMO ESTA; Y SI ES ASI BORRAR HERO CONTAINER
import "./Hero.css";

export default function Hero() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 2000, duration: 2000 }
  });
  return (
    <div id="hero">
      <div id="smoke">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <animated.div style={props}>
                <p>
                  "The only way to do great work is to love what you do"
                </p>
                <small id="stevejobs">#Steve Jobs</small>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}