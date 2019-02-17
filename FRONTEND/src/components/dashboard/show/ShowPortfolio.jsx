import React, { Component } from "react";

import axios from "axios";

import { connect } from "react-redux";

// Components
import DeployContainer from "./DeployContainer";

export class ShowPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      deploys: [
        {
          id: null,
          name: null,
          url: null,
          react: null,
          angular: null
        }
      ]
    };
  }

  // DELETE FROM API AND SPLICE ON STATE
  handleClickDelete = (id, index) => {
    // Remove from state
    let deploysArray = this.state.deploys;
    console.log(index);
    deploysArray.splice(index, 1);

    // Delete from database
    axios
      .post("projects/deletedeploy", {
        email: this.state.email,
        id: id
      })
      .then(response => console.log(response));

    // Delete from zeit
    axios
      .delete("https://api.zeit.co/v5/now/deployments/" + id, {
        headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
      })
      .then(this.setState({ deploys: deploysArray }));

    // Close Modal
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // GET EMAIL FROM STORE AN PORTFOLIOS FROM DB
  componentDidMount() {
    // Set state from Redux props
    this.setState({
      email: this.props.auth.user.email
    });

    axios
      .post("projects/getprojects", { email: this.props.auth.user.email })
      .then(response =>
        // Index+1 to avoid duplicate data when click
        response.data.proyectsName.map((deploy, index) =>
          this.state.deploys[index + 1] === undefined ? (
            this.setState(previousState => ({
              deploys: [
                ...previousState.deploys,
                { id: deploy.id, name: deploy.name, url: deploy.url, react: deploy.react, angular: deploy.angular }
              ]
            }))
          ) : (
            <p>NO HAY NADA!</p>
          )
        )
      );
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <div className="container">
          <div className="row">
            {this.state.deploys[1] === undefined ? (
              <p>NO PORTFOLIOS :(</p>
            ) : (
              // console.log()
              <div id="deployContainer" class="row">
                {this.state.deploys.map((deploy, index) =>
                  deploy.name === null ? (
                    console.log()
                  ) : (
                    <div key={deploy.id} className="col-lg-4">
                      <DeployContainer
                        deploy={deploy}
                        index={index}
                        delete={this.handleClickDelete}
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {}
)(ShowPortfolio);
