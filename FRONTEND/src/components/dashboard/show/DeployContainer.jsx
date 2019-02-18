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
      </div>
    );
  }
}

export default DeployContainer;
