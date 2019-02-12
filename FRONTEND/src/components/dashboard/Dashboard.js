import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Nuevo from "./Nuevo";
import Nuevo2 from "./Nuevo2";

//Correct components ----- BORRAR CUANDO ESTE TODO OK
import ShowPortfolio from "./show/ShowPortfolio";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Link } from "react-router-dom";

// Components
import ZeitApi from "./ZeitApi";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container">
        <ShowPortfolio userid={this.props.auth.user.id}/>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-6">MENU</div>
              <div className="col-6 ">
                VISTA
                <Route exact path="/nuevo" component={Nuevo} />
                <Route exact path="/nuevo2" component={Nuevo2} />
              </div>
            </div>
            {/* <Nuevo /> */}
            <Link to="/nuevo">
              <button> NUEVO</button>
            </Link>
          </div>
        </Router>
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="text-info">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button onClick={this.onLogoutClick} className="btn btn-info mt-3">
              Logout
            </button>
          </div>
        </div>
        <h4>_HOLA_</h4>
        <hr />
        <ZeitApi userid={this.props.auth.user.id} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  nuevo: state.nuevo
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
