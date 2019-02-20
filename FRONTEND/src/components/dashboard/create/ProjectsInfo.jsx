import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { sendProjectsInfo } from "../../../actions/createPortfolioActions";

// Component
import { FormErrors } from "./formerrors/FormErrors";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export class ProjectsInfo extends Component {
  constructor() {
    super();
    this.state = {
      projectName1: "",
      infoProject1: "",
      urlProject1: "",
      projectName2: "",
      infoProject2: "",
      urlProject2: "",
      projectName3: "",
      infoProject3: "",
      urlProject3: "",


      //VALIDATION
      formErrors: { projectName1: "" },
      projectName1Valid: false,
      infoProject1Valid: false,
      projectName2Valid: false,
      infoProject2Valid: false,
      projectName3Valid: false,
      infoProject3Valid: false,

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

    let projectName1Valid = this.state.projectName1Valid;
    let infoProject1Valid = this.state.infoProject1Valid;
    let projectName2Valid = this.state.projectName2Valid;
    let infoProject2Valid = this.state.infoProject2Valid;
    let projectName3Valid = this.state.projectName3Valid;
    let infoProject3Valid = this.state.infoProject3Valid;

    switch (fieldId) {
      case "projectName1":
        projectName1Valid = value.length > 1;
        fieldValidationErrors.projectName1 = projectName1Valid
          ? ""
          : " is too short";
        break;
      case "infoProject1":
        infoProject1Valid = value.length > 1;
        fieldValidationErrors.infoProject1 = infoProject1Valid
          ? ""
          : " is too short";
        break;
      case "projectName2":
        projectName2Valid = value.length > 1;
        fieldValidationErrors.projectName2 = projectName2Valid
          ? ""
          : " is too short";
        break;
      case "infoProject2":
        infoProject2Valid = value.length > 1;
        fieldValidationErrors.infoProject2 = infoProject2Valid
          ? ""
          : " is invalid";
        break;
      case "projectName3":
        projectName3Valid = value.length > 1;
        fieldValidationErrors.projectName3 = projectName3Valid
          ? ""
          : " is too short";
        break;
      case "infoProject3":
        infoProject3Valid = value.length > 1;
        fieldValidationErrors.infoProject3 = infoProject3Valid
          ? ""
          : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        projectName1Valid: projectName1Valid,
        infoProject1Valid: infoProject1Valid,
        projectName2Valid: projectName2Valid,
        infoProject2Valid: infoProject2Valid,
        projectName3Valid: projectName3Valid,
        infoProject3Valid: infoProject3Valid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.projectName1Valid &&
        this.state.infoProject1Valid &&
        this.state.projectName2Valid &&
        this.state.infoProject2Valid &&
        this.state.projectName3Valid &&
        this.state.infoProject3Valid
    });
  }

  // ONCLICK, SEND TO REDUX AND TO LOCAL STORAGE
  handleClickRedux = () => {
    this.props.sendProjectsInfo(this.state);
    let projectsInfo = {
      projectName1: this.state.projectName1,
      infoProject1: this.state.infoProject1,
      urlProject1: this.state.urlProject1,
      projectName2: this.state.projectName2,
      infoProject2: this.state.infoProject2,
      urlProject2: this.state.urlProject2,
      projectName3: this.state.projectName3,
      infoProject3: this.state.infoProject3,
      urlProject3: this.state.urlProject3,
    };
    localStorage.setItem("ProjectsInfo", JSON.stringify(projectsInfo));
  };

  // WHEN MOUNT, TAKE DATA FROM LOCAL STORAGE FOR UX
  componentDidMount() {
    let projectsInfoStorage = JSON.parse(localStorage.getItem("ProjectsInfo"));

    localStorage.getItem("ProjectsInfo")
      ? this.setState({
          projectName1: projectsInfoStorage.projectName1,
          infoProject1: projectsInfoStorage.infoProject1,
          urlProject1: projectsInfoStorage.urlProject1,
          projectName2: projectsInfoStorage.projectName2,
          infoProject2: projectsInfoStorage.infoProject2,
          urlProject2: projectsInfoStorage.urlProject2,
          projectName3: projectsInfoStorage.projectName3,
          infoProject3: projectsInfoStorage.infoProject3,
          urlProject3: projectsInfoStorage.urlProject3,

          formValid: !this.state.formValid
        })
      : console.log();
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
            percent={99}
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
                      <b>03</b>
                    </span>
                    <span className="text-white ml-2">PROJECT'S INFO</span>
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
                    value={this.state.projectName1}
                    id="projectName1"
                    type="text"
                    placeholder="Project #1 - Name"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #1 - Name
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.infoProject1}
                    id="infoProject1"
                    type="text"
                    placeholder="Project #1 - Info"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #1 - Info
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.urlProject1}
                    id="urlProject1"
                    type="text"
                    placeholder="Project #1 - URL"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #1 - URL
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.projectName2}
                    id="projectName2"
                    type="text"
                    placeholder="Project #2 - Name"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #2 - Name
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.infoProject2}
                    id="infoProject2"
                    type="text"
                    placeholder="Project #2 - Info"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #2 - Info
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.urlProject2}
                    id="urlProject2"
                    type="text"
                    placeholder="Project #2 - URL"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #2 - URL
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.projectName3}
                    id="projectName3"
                    type="text"
                    placeholder="Project #3 - Name"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #3 - Name
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.infoProject3}
                    id="infoProject3"
                    type="text"
                    placeholder="Project #3 - Info"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #3 - Info
                  </label>
                </div>
                <div className="form-groupe mb-4">
                  <input
                    onChange={this.onChange}
                    value={this.state.urlProject3}
                    id="urlProject3"
                    type="text"
                    placeholder="Project #3 - URL"
                  />
                  <label
                    className="label-form-groupe"
                    htmlFor="dynamic-label-input"
                  >
                    Project #3 - URL
                  </label>
                </div>
              </form>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/create-portfolio/portfolio-info">
                      <button
                        className="btn btn-info btn-lg btn-block"
                        disabled={!this.state.formValid}
                        onClick={this.handleClickRedux}
                      >
                        {" "}
                        BACK
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-4 offset-md-4">
                    <Link to="/create-portfolio/post-zeit-api">
                      <button
                        className="btn btn-info btn-lg btn-block"
                        disabled={!this.state.formValid}
                        onClick={this.handleClickRedux}
                      >
                        {" "}
                        SEND
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
  createPortfolio: state.createPortfolio,
  auth: state.auth,
  nuevo: state.nuevo
});

export default (ProjectsInfo = connect(
  mapStateToProps,
  { sendProjectsInfo }
)(ProjectsInfo));
