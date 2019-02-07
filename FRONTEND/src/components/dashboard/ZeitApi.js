import React, { Component } from "react";

import axios from "axios";

class ZeitApi extends Component {
  constructor() {
    super();
    this.state = {
      deploys: [
        {
          id: null,
          name: null,
          url: null,
        }
      ],
      projectName: "",
      data: "",

      url: "",

      //   isValid: false

      //   test: "pruebanueva"
    };

    this.handleClickGet = this.handleClickGet.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // ON CHANGE FORM
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleClickDelete = (id, index) => {
    let deploysArray = this.state.deploys;
    deploysArray.splice(index, 1);

    axios
      .delete("https://api.zeit.co/v5/now/deployments/" + id, {
        headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
      })
      .then(this.setState({ deploys: deploysArray }));
  };

  // GET OF PROJECTS DEPLOYS
  handleClickGet = () => {
    axios
      .get("https://api.zeit.co/v3/now/deployments", {
        headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
      })
      .then(response =>
        //Index+1 to avoid duplicate data when click
        response.data.deployments.map((deploy, index) => this.state.deploys[index+1] === undefined? 
          this.setState(previousState => ({
            deploys: [
              ...previousState.deploys,
              { id: deploy.uid, name: deploy.name, url: deploy.url }
            ]
          })) : console.log()
        )
      );
  };

  // POST OF NEW PROJECTS
  handleClickPost = () => {
    axios({
      method: "post",
      url: "https://api.zeit.co/v6/now/deployments",
      headers: {
        Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG"
        // "Content-Type" : "application/json"
      },
      data: {
        name: `${this.state.projectName}`,
        public: false,
        version: 2,
        files: [
          {
            file: "index.html",
            data: `<h1>Hola esto es una: ${this.state.data}</h1>`
          }
        ]
      }
    })
      .then(response =>
        // console.log(response))

        // When get url back as a response, set state and go to a link in render
        this.setState({
          url: `https://${response.data.url}`,
          projectUrlName: this.state.projectName,

          isValid: true //PARA USAR EN UN FUTURO DISABLE HASTA QUE ESTE CARGADO EL RESPONSE
        })
      )
      .catch(error => console.log(error)); // PINTAR ERROR EN PANTALLA DE USUARIO
  };

  //     componentWillMount() {
  //       console.log("hola")
  //       axios
  //       .get("https://api.zeit.co/v3/now/deployments", {
  //         headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
  //       })
  //       .then(response =>
  //         response.data.deployments.map(deploy =>
  //           this.setState(previousState => ({
  //             deploys: [
  //               ...previousState.deploys,
  //               { id: deploy.uid, name: deploy.name, url: deploy.url }
  //             ]
  //           }))
  //         )
  //       );
  //   }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button
              className="btn btn-secondary"
              onClick={this.handleClickPost}
            >
              Hacer Deploy
            </button>
            <a href={this.state.url} target="_blank" rel="noopener noreferrer">
              {this.state.projectUrlName}
            </a>
            <hr />
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    placeholder="Nombre del Proyecto"
                    onChange={this.onChange}
                    value={this.state.projectName}
                    //   error={errors.email}
                    id="projectName"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.email || errors.emailnotfound
                    //   })}
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
              </div>
              <div className="form-group">
                <div className="input-group">
                  {/* <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-lock" />
                      </span>
                    </div> */}
                  <input
                    onChange={this.onChange}
                    value={this.state.data}
                    //   error={errors.password}
                    id="data"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="Data text"
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span> */}
              </div>
              {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  </div> */}
            </form>
          </div>
          <div className="col-6">
            <button className="btn btn-secondary" onClick={this.handleClickGet}>
              Ver Deploys
            </button>
            {this.state.deploys[1] === undefined? console.log() 
            : 
            <div id="deployContainer">
              {this.state.deploys.map((deploy, index) => deploy.name === null? console.log() : (
                <div key={deploy.id} className="deployContainer">
                  <p>Nombre: {deploy.name}</p>
                  <p>Url: {deploy.url}</p>
                  <button
                    className="btn btn-danger"
                    onClick={this.handleClickDelete.bind(
                      this,
                      deploy.id,
                      index
                    )}
                    // deploy.name === null
                  >
                    X
                  </button>
                  <hr />
                </div>
              ))}
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
export default ZeitApi;
