import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Components
import ZeitApi from './ZeitApi'

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {

    const { user } = this.props.auth;

return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="text-info">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="btn btn-info mt-3"
            >
              Logout
            </button>
          </div>
        </div>
            <h4>_HOLA_</h4>
            <hr/>
            <ZeitApi/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);