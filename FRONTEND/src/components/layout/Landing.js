import React, { Component } from "react";

import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col text-center">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="text-info">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <Link to="/register">
              <button className="btn btn-primary m-3">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary m-3">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
