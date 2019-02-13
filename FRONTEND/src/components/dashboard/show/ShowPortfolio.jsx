import React, { Component } from "react";

import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      ],
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  // TOGGLE FOR MODAL
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // GET PROJECTS DEPLOY FOR USER
  handleClickGet = () => {
    axios
      .post("projects/getprojects", { email: this.state.email })
      .then(response =>
        // Index+1 to avoid duplicate data when click
        response.data.proyectsName.map((deploy, index) =>
          this.state.deploys[index + 1] === undefined ? (
            this.setState(previousState => ({
              deploys: [
                ...previousState.deploys,
                { id: deploy.id, name: deploy.name, url: deploy.url }
              ]
            }))
          ) : (
            <p>NO HAY NADA!</p>
          )
        )
      );
  };

  // DELETE FROM API AND SPLICE ON STATE
  handleClickDelete = (id, index) => {
    // Remove from state
    let deploysArray = this.state.deploys;
    console.log(index);
    deploysArray.splice(index, 1);

    // Delete from database
    // axios
    //   .post("projects/deletedeploy", {
    //     email: this.state.email,
    //     id: id
    //   })
    //   .then(response => console.log(response));

    // // Delete from zeit
    // axios
    //   .delete("https://api.zeit.co/v5/now/deployments/" + id, {
    //     headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
    //   })
    //   .then(this.setState({ deploys: deploysArray }));

    // Close Modal
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // GET EMAIL FROM DB
  componentDidMount() {
    axios
      .post("api/users/email", {
        id: this.props.userid
      })
      .then(response => this.setState({ email: response.data.email }));
  }

  render() {
    return (
      <div>
        <div className="col-6">
          <button className="btn btn-secondary" onClick={this.handleClickGet}>
            Show Portfolios
          </button>
          <div className="col-6">
            {this.state.deploys[0] === undefined ? (
              <p>NO HAY NADA!</p>
            ) : (
              // console.log()
              <div id="deployContainer">
                {this.state.deploys.map((deploy, index) =>
                  deploy.name === null ? (
                    console.log()
                  ) : (
                    <div key={deploy.id} className="deployContainer">
                      <p>INDICE: {index}</p>
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
                      <div>
                        <Button color="danger" onClick={this.toggle}>
                          DELETE {index}
                        </Button>
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                          className={this.props.className}
                        >
                          <ModalHeader toggle={this.toggle}>
                            Are you sure?
                          </ModalHeader>
                          <ModalBody>
                            Delete the portfolio will make it unable to link
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={this.handleClickDelete.bind(
                                this,
                                deploy.id,
                                index
                              )}
                            >
                              Yes, Delete {index}
                            </Button>{" "}
                            <Button color="secondary" onClick={this.toggle}>
                              Cancel
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </div>
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
