import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { sendPersonalInfo } from "../../../actions/createPortfolioActions";

// Component
import { FormErrors } from "./formerrors/FormErrors";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import "./CreatePortfolio.css";

export class CreatePortfolio extends Component {
  constructor() {
    super();
    this.state = {
      //PERSONAL INFO
      userName: "",
      userLastName: "",
      userInfo: "",
      email: "",
      linkedin: "",

      //VALIDATION
      formErrors: { userName: "" },
      userNameValid: false,
      userLastNameValid: false,
      userInfoValid: false,
      emailValid: false,
      linkedinValid: false,

      formValid: false
    };
  }

  // ON CHANGE FORM
  onChange = e => {
    // To deal with different inputs + validations
    const target = e.target;
    const value = target.value;
    const ide = e.target.id;
    this.setState({ [e.target.id]: value }, () => {
      this.validateField(ide, value);
    });
  };

  validateField(fieldId, value) {
    let fieldValidationErrors = this.state.formErrors;

    let userNameValid = this.state.userNameValid;
    let userLastNameValid = this.state.userLastNameValid;
    let userInfoValid = this.state.userInfoValid;
    let emailValid = this.state.emailValid;
    let linkedinValid = this.state.linkedinValid;

    switch (fieldId) {
      case "userName":
        userNameValid = value.length > 1;
        fieldValidationErrors.userName = userNameValid ? "" : " is too short";
        break;
      case "userLastName":
        userLastNameValid = value.length > 1;
        fieldValidationErrors.userLastName = userLastNameValid
          ? ""
          : " is too short";
        break;
      case "userInfo":
        userInfoValid = value.length > 1;
        fieldValidationErrors.userInfo = userInfoValid ? "" : " is too short";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "linkedin":
        linkedinValid = value.length > 1;
        fieldValidationErrors.linkedin = linkedinValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        userNameValid: userNameValid,
        userLastNameValid: userLastNameValid,
        userInfoValid: userInfoValid,
        emailValid: emailValid,
        linkedinValid: linkedinValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.userNameValid &&
        this.state.userLastNameValid &&
        this.state.userInfoValid &&
        this.state.emailValid &&
        this.state.linkedinValid
    });
  }

  // ONCLICK, SEND TO REDUX AND TO LOCAL STORAGE
  handleClickRedux = () => {
    this.props.sendPersonalInfo(this.state);
    let personalInfo = {
      userName: this.state.userName,
      userLastName: this.state.userLastName,
      userInfo: this.state.userInfo,
      email: this.state.email,
      linkedin: this.state.linkedin
    };
    localStorage.setItem("PersonalInfo", JSON.stringify(personalInfo));
  };

  // WHEN MOUNT, TAKE DATA FROM LOCAL STORAGE FOR UX
  componentDidMount() {
    // SET STATE FROM LOCAL STORAGE TERNARY TO PREVENT ERROR WHEN EMPTY LOCAL STORAGE
    let personalInfoStorage = JSON.parse(localStorage.getItem("PersonalInfo"));

    localStorage.getItem("PersonalInfo")
      ? this.setState({
          userName: personalInfoStorage.userName,
          userLastName: personalInfoStorage.userLastName,
          userInfo: personalInfoStorage.userInfo,
          email: personalInfoStorage.email,
          linkedin: personalInfoStorage.linkedin,
          formValid: !this.state.formValid
        })
      : this.setState({ email: this.props.auth.user.email });
  }

  render() {
    return (
      <div>
        <div className="mt-3 p-1">
          <Progress
            theme={{
              active: {
                symbol: " ",
                color: "rgb(0, 182, 208)"
              }
            }}
            percent={35}
          />
        </div>
        <div className="container shadow">
          <div id="create-portfolio-row" className="row">
            <div id="create-portfolio-container" className="col-lg-4 p-0">
              <div id="smoke-create-portfolio">
                <div
                  className="row align-items-center"
                  style={{ height: "80vh" }}
                >
                  <div className="col-12 text-center p-0">
                    <span className="rounded-circle bg-info p-3 text-white">
                      <b>01</b>
                    </span>
                    <span className="text-white ml-2">PERSONAL INFO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form noValidate>
                <div className="panel panel-default”">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.userName}
                    id="userName"
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
                    value={this.state.userLastName}
                    id="userLastName"
                    type="text"
                    placeholder="Last Name"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Last Name
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.userInfo}
                    id="userInfo"
                    type="text"
                    placeholder="FrontEnd - BackEnd - FullStack"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    FrontEnd - BackEnd - FullStack
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Email
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.linkedin}
                    id="linkedin"
                    type="text"
                    placeholder="Linkedin Profile Url"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Linkedin Profile Url
                  </label>
                </div>
              </form>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 offset-md-8">
                    <Link to="/create-portfolio/portfolio-info">
                      <button
                        className="btn btn-info btn-lg btn-block"
                        disabled={!this.state.formValid}
                        onClick={this.handleClickRedux}
                      >
                        {" "}
                        NEXT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.UserName,
  userLastName: state.userLastName,
  userInfo: state.userInfo,
  email: state.email,
  linkedin: state.linkedin,
  auth: state.auth
});
export default (CreatePortfolio = connect(
  mapStateToProps,
  { sendPersonalInfo }
)(CreatePortfolio));
