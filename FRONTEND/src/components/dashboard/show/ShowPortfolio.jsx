import React, { Component } from "react";

import axios from "axios";

export class ShowPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      deploys: [
        {
          id: null,
          name: null,
          url: null
        }
      ]
    };
  }

  // GET PROJECTS DEPLOY FOR USER
  handleClickGet = () => {
    axios
      .post("projects/getprojects", { email: this.state.email })
      .then(response =>
        // Index+1 to avoid duplicate data when click
        response.data.proyectsName.map((deploy, index) =>
          this.state.deploys[index + 1] === undefined
            ? this.setState(previousState => ({
                deploys: [
                  ...previousState.deploys,
                  { id: deploy.id, name: deploy.name, url: deploy.url }
                ]
              }))
            : console.log()
        )
      );
  };

  // DELETE FROM API AND SPLICE ON STATE
  handleClickDelete = (id, index) => {
    // Remove from state
    let deploysArray = this.state.deploys;
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
  };

  // Get email from DB
  componentDidMount(){
    axios.post("api/users/email", {
      id: this.props.userid
    })
    .then(response =>this.setState({ email: response.data.email }))
  }

  render() {
    return (
      <div>
        <div className="col-6">
          <button className="btn btn-secondary" onClick={this.handleClickGet}>
            Ver Deploys
          </button>
          <div className="col-6">
            {this.state.deploys[1] === undefined ? (
              console.log()
            ) : (
              <div id="deployContainer">
                {this.state.deploys.map((deploy, index) =>
                  deploy.name === null ? (
                    console.log()
                  ) : (
                    <div key={deploy.id} className="deployContainer">
                      <p>Nombre: {deploy.name}</p>
                      <p>
                        Url:
                        <a
                          href={`https://${deploy.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://{deploy.url}
                        </a>
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={this.handleClickDelete.bind(
                          this,
                          deploy.id,
                          index
                        )}
                      >
                        X
                      </button>
                      <hr />
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

export default ShowPortfolio;
