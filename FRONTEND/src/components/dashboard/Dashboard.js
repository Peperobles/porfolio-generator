import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// import Nuevo from "./Nuevo";
// import Nuevo2 from "./Nuevo2";

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

import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
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
  };

  render() {
    // console.log(this.props)
    // const { user } = this.props.auth;

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
                    <Link to="/dashboard">Dashboard</Link>
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
                <hr/>
                <p>LOGOUT</p>
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
