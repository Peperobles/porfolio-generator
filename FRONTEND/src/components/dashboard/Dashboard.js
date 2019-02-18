import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { Chart } from "./Chart";

//Correct components ----- BORRAR CUANDO ESTE TODO OK
import ShowPortfolio from "./show/ShowPortfolio";
import CreatePortFolio from "./create/CreatePortfolio";
import PortfolioInfo from "./create/PortfolioInfo";
import ProjectsInfo from "./create/ProjectsInfo";
import PostZeitApi from "./create/zeit/PostZeitApi";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Style SideNav
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      // bgColor: "",
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    localStorage.clear();
  };

  render() {

    return (
      <div>
        <Router>
          <div>
            <SideNav
              id="dashboard"
              onSelect={selected => {
                // this.setState({
                //   bgColor: "black"
                // })
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav>
                <NavItem eventKey="dashboard">
                  <NavIcon>
                    <i
                      className="far fa-address-card"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>
                    <Link to="/chart">Dashboard</Link>
                  </NavText>
                  <NavItem />
                </NavItem>
                <NavItem eventKey="show">
                  <NavIcon>
                    <i
                      className="fas fa-briefcase"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>
                    <Link to="/show-portfolio">Portfolios</Link>
                  </NavText>
                  <NavItem />
                </NavItem>
                <NavItem eventKey="create">
                  <NavIcon>
                    <i
                      className="fas fa-marker"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>
                    <Link to="/create-portfolio/personal-info">
                      Create Portfolio
                    </Link>
                  </NavText>
                  <NavItem />
                </NavItem>
                <hr />
                <NavItem eventKey="logOut">
                  <NavIcon>
                    <i
                      className="fas fa-power-off"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>
                    {/* <Link to="/create-portfolio/personal-info">
                      Create Portfolio
                    </Link> */}
                    <button onClick={this.onLogoutClick}>Logout</button>
                  </NavText>
                  <NavItem />
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <div className="container">
              <div className="row">
                <div className="col-12">
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
                  <Route exact path="/chart" component={Chart} />
                </div>
              </div>
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
