import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Css
import "./Navbar.css";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    localStorage.clear();
  };
  render() {
    return (
      <div>
        {/* isAuthenticated navbar style 1, else navbar style 2 */}
        {this.props.auth.isAuthenticated ? (
          <nav className="navbar navbar-light bg-light">
            <Link to="/">
              <i className="fas fa-redo fa-rotate-270 fa-2x" />
              PORTFOLIO-GENERATOR
            </Link>

            <div>
              <Link to="/dashboard">
                <button id="buttonDashboardNav"className="btn btn-secondary m-3">Dashboard</button>
              </Link>
              <button
                id="buttonLogoutNav"
                onClick={this.onLogoutClick}
                className="btn btn-info m-3"
              >
                <i className="fas fa-power-off fa-lg" />
              </button>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-light bg-light">
            <Link to="/">
              <i className="fas fa-redo fa-rotate-270 fa-2x" />
              PORTFOLIO-GENERATOR
            </Link>
            <div>
              <Link to="/register">
                <button id="buttonRegisterNav" className="btn btn-info m-3">Register</button>
              </Link>
              <Link to="/login">
                <button id="buttonLogIngNav" className="btn btn-secondary m-3"><i className="far fa-user fa-lg"></i></button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default (Navbar = connect(
  mapStateToProps,
  { logoutUser }
)(Navbar));
