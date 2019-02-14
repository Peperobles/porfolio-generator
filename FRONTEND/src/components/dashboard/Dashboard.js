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
import PostZeitApi from "./create/zeit/PostZeitApi"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// Components
import ZeitApi from "./ZeitApi";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // console.log(this.props)
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container">
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-6">MENU</div>
              <div className="col-6 ">
                VISTA
                <Route exact path="/show-portfolio" component={() => <ShowPortfolio userid={this.props.auth.user.id}/>}/>
                <Route exact path="/create-portfolio/personal-info" component={CreatePortFolio} />
                <Route exact path="/create-portfolio/portfolio-info" component={PortfolioInfo} />
                <Route exact path="/create-portfolio/projects-info" component={ProjectsInfo} />
                <Route exact path="/create-portfolio/post-zeit-api" component={PostZeitApi} />
                <Route exact path="/nuevo" component={Nuevo} />
                <Route exact path="/nuevo2" component={Nuevo2} />
              </div>
            </div>
            <Link to="/show-portfolio">
              <button> SHOW PORTFOLIOS</button>
            </Link>
            <Link to="/create-portfolio/personal-info">
              <button> CREATE PORTFOLIO</button>
            </Link>
            <Link to="/nuevo">
              <button> nuevo</button>
            </Link>
          </div>
        </Router>
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="text-info">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button onClick={this.onLogoutClick} className="btn btn-info mt-3">
              Logout
            </button>
          </div>
        </div>
        <h4>_HOLA_</h4>
        <Nuevo/>
        {/* <CreatePortFolio/> */}
        <hr />
        <ZeitApi userid={this.props.auth.user.id} />
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

  createPortfolio: state.createPortfolio,
  
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
