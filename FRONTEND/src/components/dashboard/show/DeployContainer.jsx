import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class DeployContainer extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return (
        <div key={this.props.deploy.id} className="deployContainer">
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
        </div>
    );
  }
}

export default DeployContainer;
