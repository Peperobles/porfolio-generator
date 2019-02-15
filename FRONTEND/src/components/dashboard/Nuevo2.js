import React from "react";

import { useSpring, animated } from "react-spring";

import Nuevo2Contenido from "./Nuevo2Contenido"

export default function Nuevo2() {
  const props = useSpring({
    to:[{background:'#343A40',height: "100vh", marginRight: 0},{background:"#343A40", marginRight:1600},{background:"white", marginRight:-16000}, {background:"red", marginRight:0}],
    from: { background: '#343A40', height: "100vh",marginRight: 1500 },
    config: [{ duration: 500 },{ duration: 500},{ duration: 10}, {duration: 500}],
    // delay: 1000
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
