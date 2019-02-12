import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { sendPersonalInfo } from "../../../actions/createPortfolioActions";

// Component
import { FormErrors } from "./formerrors/FormErrors";

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
    let personalInfo = {userName: this.state.userName, userLastName: this.state.userLastName, userInfo: this.state.userInfo, email: this.state.email, linkedin: this.state.linkedin}
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
      : console.log();
  }

  render() {
    return (
      <div>
        <form noValidate>
          <div className="container border">
            <h4>INFO PERSONAL:</h4>
            <div className="panel panel-default”">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-lock" />
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.userName}
                  id="userName"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-lock" />
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.userLastName}
                  id="userLastName"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-lock" />
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.userInfo}
                  id="userInfo"
                  type="text"
                  placeholder="Full Stack - Front End..."
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-lock" />
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="text"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-lock" />
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.linkedin}
                  id="linkedin"
                  type="text"
                  placeholder="linkedin"
                />
              </div>
            </div>
          </div>
        </form>
        <Link to="/nuevo">
          <button
            disabled={!this.state.formValid}
            onClick={this.handleClickRedux}
          >
            {" "}
            NEXT
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.UserName,
  userLastName: state.userLastName,
  userInfo: state.userInfo,
  email: state.email,
  linkedin: state.linkedin
});
export default (CreatePortfolio = connect(
  mapStateToProps,
  { sendPersonalInfo }
)(CreatePortfolio));
