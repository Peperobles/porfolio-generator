import React, { Component } from "react";

import { connect } from "react-redux";
import { sendAlgo } from "../../actions/actionNuevo";

import { Link } from "react-router-dom";

class Nuevo extends Component {
  constructor() {
    super();
    this.state = {
      test: "hola??",
      nuevo: "adios"
    };
  }

  componentDidMount() {
    this.props.sendAlgo(this.state);
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        NUEVO 1
        <Link to="/nuevo2">
          <button> SIGUIENTE</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
  nuevo: state.nuevo
});
export default (Nuevo = connect(
  mapStateToProps,
  { sendAlgo }
)(Nuevo));

// mapStateToProps = state =>{

// }
// export default connectedNuevo connect(mapStateToProps, mapDispatchToProps)(Nuevo);
