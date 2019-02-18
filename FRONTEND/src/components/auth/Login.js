import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";

import Navbar from "../layout/Navbar";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    // const { errors } = this.state;

    return (
      <div>
        <Navbar />

        <div className="container-fluid" id="LoginContainer">
          <div className="container-fluid" id="LoginSmoke">
            <div className="row justify-content-center">
              <div className="card p-5 shadow mt-5">
                <article className="card-body">
                  <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                  <hr />
                  <p className="text-info text-center">Welcome Back!</p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-groupe mb-4">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        id="email"
                        type="email"
                        placeholder="E-mail"
                      />
                      <label
                        className="label-form-groupe"
                        htmlFor="dynamic-label-input"
                      >
                        E-mail
                      </label>
                    </div>
                    <div className="form-groupe mb-4">
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        id="password"
                        type="password"
                        placeholder="******"
                      />
                      <label
                        className="label-form-groupe"
                        htmlFor="dynamic-label-input"
                      >
                        Password
                      </label>
                    </div>

                    {/* <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="mdi mdi-person" />
                          </span>
                        </div>
                        <input
                          placeholder="E-mail"
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          className={classnames("form-control", {
                            invalid: errors.email || errors.emailnotfound
                          })}
                        />
                      </div>
                      <span className="text-danger">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    </div> */}
                    {/* <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="mdi mdi-lock" />
                          </span>
                        </div>
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className={classnames("form-control", {
                            invalid: errors.password || errors.passwordincorrect
                          })}
                          placeholder="******"
                        />
                      </div>
                      <span className="text-danger">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                    </div> */}
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-info btn-block"
                      >
                        Login
                      </button>
                      <p className="text-dark">
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link>
                      </p>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
