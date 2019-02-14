import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { sendProjectsInfo } from "../../../actions/createPortfolioActions";

// Component
import { FormErrors } from "./formerrors/FormErrors";

export class ProjectsInfo extends Component {
  constructor() {
    super();
    this.state = {
      projectName1: "",
      infoProject1: "",
      projectName2: "",
      infoProject2: "",
      projectName3: "",
      infoProject3: "",

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
      projectName2: this.state.projectName2,
      infoProject2: this.state.infoProject2,
      projectName3: this.state.projectName3,
      infoProject3: this.state.infoProject3
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
          projectName2: projectsInfoStorage.projectName2,
          infoProject2: projectsInfoStorage.infoProject2,
          projectName3: projectsInfoStorage.projectName3,
          infoProject3: projectsInfoStorage.infoProject3,

          formValid: !this.state.formValid
        })
      : console.log();
  }

  render() {
    return (
      <div>
        <form>
          <div className="container border">
            <h4>PROJECT #1:</h4>
            <div className="panel panel-default”">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  placeholder="Nombre del Proyecto #1"
                  onChange={this.onChange}
                  value={this.state.projectName1}
                  id="projectName1"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  onChange={this.onChange}
                  value={this.state.infoProject1}
                  id="infoProject1"
                  type="text"
                  placeholder="Info del proyecto #1"
                />
              </div>
            </div>
          </div>
          {/* --------------------------------------------- PROJECT #2 --------------------------------------------- */}
          <div className="container border">
            <h4>PROJECT #2:</h4>
            <div className="form-group">
              <div className="input-group">
                <input
                  placeholder="Nombre del Proyecto #2"
                  onChange={this.onChange}
                  value={this.state.projectName2}
                  id="projectName2"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  onChange={this.onChange}
                  value={this.state.infoProject2}
                  id="infoProject2"
                  type="text"
                  placeholder="Info del Proyecto #2"
                />
              </div>
            </div>
          </div>

          {/* --------------------------------------------- PROJECT #3 --------------------------------------------- */}

          <div className="container border">
            <h4>PROJECT #3:</h4>
            <div className="form-group">
              <div className="input-group">
                <input
                  placeholder="Nombre del Proyecto #3"
                  onChange={this.onChange}
                  value={this.state.projectName3}
                  id="projectName3"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  onChange={this.onChange}
                  value={this.state.infoProject3}
                  id="infoProject3"
                  type="text"
                  placeholder="Info del Proyecto #3"
                />
              </div>
            </div>
          </div>
        </form>
        <Link to="/create-portfolio/portfolio-info">
          <button onClick={this.handleClickRedux}> BACK</button>
        </Link>
        <Link to="/create-portfolio/post-zeit-api">
          <button
            disabled={!this.state.formValid}
            onClick={this.handleClickRedux}
          >
            {" "}
            SEND PORTFOLIO
          </button>
        </Link>
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
