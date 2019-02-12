import React from "react";

import { useSpring, animated } from "react-spring";

import Nuevo2Contenido from "./Nuevo2Contenido"

export default function Nuevo2() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 2000, duration: 2000 }
  });
  return (
    <div>
      <animated.div style={props}>
        <Nuevo2Contenido />
      </animated.div>
    </div>
  );
}

// import React, { Component } from 'react'

// export class Nuevo2 extends Component {
//   render() {
//     return (
//       <div>
//         HOLA SOY NÇUEVO 2
//       </div>
//     )
//   }
// }

// export default Nuevo2
