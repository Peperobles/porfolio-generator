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
  };
  render() {
    return (
      <div>
        {/* isAuthenticated navbar style 1, else navbar style 2 */}
        {this.props.auth.isAuthenticated ? (
          <nav className="navbar navbar-light bg-light">
            <Link to="/">
              <i className="mdi mdi-home mdi-2x" />
            </Link>
            <div>
              <p>Welcome {this.props.auth.user.name}</p>
            </div>
            <div>
              <Link to="/dashboard">
                <button className="btn btn-secondary m-3">Dashboard</button>
              </Link>
              <button onClick={this.onLogoutClick} className="btn btn-danger m-3">Logout</button>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-light bg-light">
            <Link to="/">
              <i className="mdi mdi-home mdi-2x" />
            </Link>
            <div>
              <Link to="/register">
                <button className="btn btn-info m-3">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary m-3">Log In</button>
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
