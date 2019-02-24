import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";

import Navbar from "../layout/Navbar";

import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    this.props.history.push("/dashboard");
  };

  render() {
    // const { errors } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container-fluid" id="RegisterContainer">
          <div className="container-fluid" id="ResgisterSmoke">
            <div className="row justify-content-center">
              <div className="card p-5 shadow mt-5">
                <article className="card-body">
                  <h4 className="card-title text-center mb-4 mt-1">REGISTER</h4>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-groupe mb-4">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                      <label
                        className="label-form-groupe"
                        htmlFor="dynamic-label-input"
                      >
                        Name
                      </label>
                    </div>
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
                        placeholder="Password"
                      />
                      <label
                        className="label-form-groupe"
                        htmlFor="dynamic-label-input"
                      >
                        Password
                      </label>
                    </div>
                    <div className="form-groupe mb-4">
                      <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        id="password2"
                        type="password"
                        placeholder="Repeat Password"
                      />
                      <label
                        className="label-form-groupe"
                        htmlFor="dynamic-label-input"
                      >
                        Repeat Password
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        name="agree-term"
                        id="agree-term"
                        className="agree-term"
                      />
                      <label htmlFor="agree-term" className="label-agree-term">
                        <span>
                          <span />
                        </span>
                        I agree all statements in{" "}
                        <a href="##" className="term-service">
                          Terms of service
                        </a>
                      </label>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-info btn-block"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-secondary">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
