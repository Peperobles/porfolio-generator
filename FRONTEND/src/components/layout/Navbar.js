import React, { Component } from "react";
import { Link } from "react-router-dom";

import { UncontrolledPopover, PopoverHeader } from "reactstrap";

// Components
import Login from "../auth/Login"

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <i className="mdi mdi-home mdi-2x" />
        </Link>
        <div>
          <Link to="/register">
            <button className="btn btn-primary m-3">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn">
              <i className="mdi mdi-account-circle mdi-2x" />
            </button>
            {/* <button className="btn btn-secondary m-3">Log In</button> */}
          </Link>
          <button className="btn"> 
            <i className="mdi mdi-account-circle mdi-2x" id="PopoverLegacy" />
          </button>
          <UncontrolledPopover
            trigger="legacy"
            placement="bottom"
            // isOpen={this.state.popoverOpen}
            target="PopoverLegacy"
            // toggle={this.toggle}
          >
            <PopoverHeader className="text-center">Welcome Back!</PopoverHeader>
              <Login/>
          </UncontrolledPopover>
        </div>
      </nav>
    );
  }
}
export default Navbar;
