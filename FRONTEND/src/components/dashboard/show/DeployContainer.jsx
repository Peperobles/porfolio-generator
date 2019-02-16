import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import backgroundAssets from "../../../assets/img/background.png";

import "./DeployContainer.css";

export class DeployContainer extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  hadleNew = () => {
    console.log("hola");
  };

  // TOGGLE FOR MODAL
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const deploy = this.props.deploy;
    return (
      <div key={this.props.deploy.id} className="">
        <div className="card profile-card-3 shadow mt-4">
          <div className="background-block">
            <img
              src={backgroundAssets}
              alt="profile-sample1"
              className="background"
            />
          </div>
          <div className="profile-thumb-block">
            {deploy.angular ? (
              <img
                src="https://angular.io/assets/images/logos/angular/angular.png"
                alt="profile"
                className="profile"
              />
            ) : (
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="profile"
                className="profile"
              />
            )}
          </div>
          <div className="card-content">
            <h2>
              {deploy.name}
              <small>Portfolio</small>
            </h2>
            <div className="icon-block">
              <a
                href={`https://${deploy.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-eye" />
              </a>
              <button onClick={this.toggle}>
                {" "}
                <i className="far fa-trash-alt" />
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Are you sure?</ModalHeader>
          <ModalBody>
            Delete the portfolio will make it unable to link
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={this.props.delete.bind(
                this,
                this.props.deploy.id,
                this.props.index
              )}
            >
              Yes, Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* <div className="card">
          <div className="card-header text-center">{deploy.name}</div>
          <div clasNames="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <div className="card-footer text-muted">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <a
                      href={`https://${deploy.url}`}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SHOW
                    </a>
                  </div>
                  <div className="col-6">
                    <Button color="danger" onClick={this.toggle}>
                      DELETE
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
                          onClick={this.props.delete.bind(
                            this,
                            this.props.deploy.id,
                            this.props.index
                          )}
                        >
                          Yes, Delete
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
        <p>INDICE: {this.props.index}</p>
        <p>Nombre: {this.props.deploy.name}</p>
        <p>
          Url:
          <a
            href={`https://${this.props.deploy.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://{this.props.deploy.url}
          </a>
        </p>
        <div>
          <Button color="danger" onClick={this.toggle}>
            DELETE
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Are you sure?</ModalHeader>
            <ModalBody>
              Delete the portfolio will make it unable to link
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                onClick={this.props.delete.bind(
                  this,
                  this.props.deploy.id,
                  this.props.index
                )}
              >
                Yes, Delete
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <hr />
        <div class="card">
          <img
            class="card-img-top"
            src="https://angular.io/assets/images/logos/angular/angular.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default DeployContainer;
