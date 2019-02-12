import React, { Component } from "react";

import { connect } from "react-redux";
import { sendAlgo } from "../../actions/actionNuevo";

class Nuevo extends Component {
  constructor() {
    super();
    this.state = {
      test: "hola??"
    };
  }

componentDidMount(){
  this.props.sendAlgo(this.state.test);
}


  render() {
    // console.log(this.props)
    return <div>asdf</div>;
  }
}


const mapStateToProps = state => ({
  test: state.test
});
export default (Nuevo = connect(
  mapStateToProps,
  { sendAlgo }
)(Nuevo));

// mapStateToProps = state =>{

// }
// export default connectedNuevo connect(mapStateToProps, mapDispatchToProps)(Nuevo);
