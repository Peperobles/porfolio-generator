import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Nuevo from "./Nuevo";
import Nuevo2 from "./Nuevo2";

//Correct components ----- BORRAR CUANDO ESTE TODO OK
import ShowPortfolio from "./show/ShowPortfolio";
import CreatePortFolio from "./create/CreatePortfolio";
import PortfolioInfo from "./create/PortfolioInfo";
import ProjectsInfo from "./create/ProjectsInfo";
import PostZeitApi from "./create/zeit/PostZeitApi";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// Components
// import ZeitApi from "./ZeitApi";

import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // console.log(this.props)
    // const { user } = this.props.auth;

    return (
      <div style={{ height: "100vh" }} className="container-fluid">
        <Router>
          <div style={{ height: "100vh" }} className="row">
            <div className="col-2 bg-dark">
              <div style={{ height: "100vh" }} className="row">
                <div className="col-12 align-self-center text-light">
                  <div className="row" style={{ height: "30vh" }}>
                    <div className="col-12 align-self-center">
                      <Link to="/dashboard">
                        <i className="mdi mdi-dashboard mdi-5x" />
                        <p>DASHBOARD</p>
                      </Link>
                    </div>
                  </div>
                  <div className="row" style={{ height: "30vh" }}>
                    <div className="col-12 align-self-center">
                      <Link to="/show-portfolio">
                        <i className="mdi mdi-slideshow mdi-5x" />
                        <p>SHOW PORTFOLIOS</p>
                      </Link>
                    </div>
                  </div>
                  <div className="row" style={{ height: "30vh" }}>
                    <div className="col-12 align-self-center">
                      <Link to="/create-portfolio/personal-info">
                        <i className="mdi mdi-import-contacts mdi-5x" />
                        <p>CREATE PORTFOLIO</p>
                      </Link>
                    </div>
                    <div className="col-12 align-self-center">
                      <Link to="/nuevo2">
                        <i className="mdi mdi-import-contacts mdi-5x" />
                        <p>NUEVO2</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p>Welcome {this.props.auth.user.name}</p>
                  </div>
                  <button onClick={this.onLogoutClick} className="btn btn-danger">Logout</button>
                </div>
              </div>
            </div>
            <div className="col-10 text-center p-0">
              <Route
                exact
                path="/show-portfolio"
                component={() => (
                  <ShowPortfolio userid={this.props.auth.user.id} />
                )}
              />
              <Route
                exact
                path="/create-portfolio/personal-info"
                component={CreatePortFolio}
              />
              <Route
                exact
                path="/create-portfolio/portfolio-info"
                component={PortfolioInfo}
              />
              <Route
                exact
                path="/create-portfolio/projects-info"
                component={ProjectsInfo}
              />
              <Route
                exact
                path="/create-portfolio/post-zeit-api"
                component={PostZeitApi}
              />
              <Route exact path="/nuevo" component={Nuevo} />
              <Route exact path="/nuevo2" component={Nuevo2} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  nuevo: state.nuevo,

  createPortfolio: state.createPortfolio
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
