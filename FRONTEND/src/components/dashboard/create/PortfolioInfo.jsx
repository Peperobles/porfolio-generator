import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { sendPortfolioInfo } from "../../../actions/createPortfolioActions";

// Component
import { FormErrors } from "./formerrors/FormErrors";

export class PortfolioInfo extends Component {
  constructor() {
    super();
    this.state = {
      // Porfolio Info
      portfolioName: "",
      gitHubIcon: false,
      reactIcon: false,
      jsIcon: false,
      cssIcon: false,
      htmlIcon: false,
      angularIcon: false,

      // VALIDATION
      formErrors: { portfolioName: "" },
      portfolioNameValid: false,

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

    let portfolioNameValid = this.state.portfolioNameValid;

    switch (fieldId) {
      case "portfolioName":
        portfolioNameValid = value.length > 1;
        fieldValidationErrors.portfolioName = portfolioNameValid
          ? ""
          : " is too short";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        portfolioNameValid: portfolioNameValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.portfolioNameValid
    });
  }

  // ONCLICK, SEND TO REDUX AND TO LOCAL STORAGE
  handleClickRedux = () => {
    this.props.sendPortfolioInfo(this.state);
    let portfolioInfo = {
      portfolioName: this.state.portfolioName,
      gitHubIcon: this.state.gitHubIcon,
      reactIcon: this.state.reactIcon,
      jsIcon: this.state.jsIcon,
      cssIcon: this.state.cssIcon,
      htmlIcon: this.state.htmlIcon,
      angularIcon: this.state.angularIcon
    };
    localStorage.setItem("portfolioInfo", JSON.stringify(portfolioInfo));
  };

  // WHEN MOUNT, TAKE DATA FROM LOCAL STORAGE FOR UX
  componentDidMount() {
    let portfolioInfoStorage = JSON.parse(
      localStorage.getItem("portfolioInfo")
    );

    localStorage.getItem("portfolioInfo")
      ? this.setState({
          portfolioName: portfolioInfoStorage.portfolioName,
          formValid: !this.state.formValid
        })
      : console.log();
  }

  render() {
    return (
      <div>
        <form noValidate>
          <div className="container border">
            <h4>PORTFOLIO INFO:</h4>
            <div className="panel panel-default”">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  placeholder="Nombre Portfolio"
                  onChange={this.onChange}
                  value={this.state.portfolioName}
                  id="portfolioName"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="reactIcon"
                />
                <label className="form-check-label" htmlFor="reactIcon">
                  React
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="gitHubIcon"
                />
                <label className="form-check-label" htmlFor="gitHubIcon">
                  GitHub
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="jsIcon"
                />
                <label className="form-check-label" htmlFor="jsIcon">
                  JavaScript
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="cssIcon"
                />
                <label className="form-check-label" htmlFor="cssIcon">
                  CSS
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="htmlIcon"
                />
                <label className="form-check-label" htmlFor="htmlIcon">
                  HTML
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.onChange}
                  id="angularIcon"
                />
                <label className="form-check-label" htmlFor="angularIcon">
                  Angular
                </label>
              </div>
            </div>
          </div>
          </form>
          <Link to="/create-portfolio/personal-info">
            <button
              onClick={this.handleClickRedux}
            >
              {" "}
              BACK
            </button>
          </Link>
          <Link to="/create-portfolio/projects-info">
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
    portfolioName: state.portfolioName,
    gitHubIcon: state.gitHubIcon,
    reactIcon: state.reactIcon,
    jsIcon: state.jsIcon,
    cssIcon: state.cssIcon,
    htmlIcon: state.htmlIcon,
    angularIcon: state.angularIcon,
})

export default (PortfolioInfo = connect(
    mapStateToProps,
    {sendPortfolioInfo}
)(PortfolioInfo));
