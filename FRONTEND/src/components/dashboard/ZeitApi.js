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
          url: null
        }
      ],

      // Personal Info
      userName: "",
      userLastName: "",
      userInfo: "",

      email: "",
      linkedin: "",

      // Project Info
      projectName: "",
      infoProject: "",
      // Checkbox tecnologias

      // Url when post, get response of page url
      url: "",

      loading: false
    };

    this.handleClickGet = this.handleClickGet.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // ON CHANGE FORM
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // DELETE FROM API AND SPLICE ON STATE
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
        response.data.deployments.map((deploy, index) =>
          this.state.deploys[index + 1] === undefined
            ? this.setState(previousState => ({
                deploys: [
                  ...previousState.deploys,
                  { id: deploy.uid, name: deploy.name, url: deploy.url }
                ]
              }))
            : console.log()
        )
      );
  };

  // POST OF NEW PROJECTS
  handleClickPost = () => {
    this.setState({ loading: true });
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
            // data: `<h1>Hola esto es una: ${this.state.data}</h1>`
            data: `
            <html>
            <head>
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
            <title>${this.state.projectName}</title>
            </head>
            <body>
            <div class ="container">

              <div class ="row">
                <div class ="col-12 text-center">
                  <h2>${this.state.userName}</h2>
                  <h3>${this.state.userLastNameidoUsuario}</h3>
                  <h6>${this.state.userInfo}</h6>
                </div>
              </div>
            <hr/>
              <div class ="row">
                <div class ="col-12 text-center">
                <h3>TECNOLOGIAS</h3>
                  <i class="fab fa-github fa-3x"></i>
                  <i class="fab fa-react fa-3x"></i>
                  <i class="fab fa-js-square fa-3x"></i>
                  <i class="fab fa-css3-alt fa-3x"></i>
                  <i class="fab fa-html5 fa-3x"></i>
                  <i class="fab fa-angular fa-3x"></i>
                </div>
              </div>
            <hr/>
              <div class ="row">
                <div class ="col-12 text-center">
                  <h3>PROJECTOS</h3>
                </div>
              </div>
              <div class ="row">
                <div class ="col-sm text-center">
                  <h4>${this.state.projectName}</h4>
                  <img class="img-fluid" src="http://www.aprende-facilmente.com/wp-content/uploads/2016/07/angularjs-logo.png" alt="${
                    this.state.projectName
                  }"/>
                  <p>${this.state.infoProject}</p>
                  <a href="#">Link a ${
                    this.state.projectName
                  }</a>                  
                  </div>
                <div class ="col-sm text-center">
                  <h4>${this.state.projectName}</h4>
                  <img class="img-fluid" src="http://www.aprende-facilmente.com/wp-content/uploads/2016/07/angularjs-logo.png" alt="${
                    this.state.projectName
                  }"/>
                  <p>${this.state.infoProject}</p>                  
                  <a href="#">Link a ${
                    this.state.projectName
                  }</a>                  
                  </div>
                <div class ="col-sm text-center">
                  <h4>${this.state.projectName}</h4>
                  <img class="img-fluid" src="http://www.aprende-facilmente.com/wp-content/uploads/2016/07/angularjs-logo.png" alt="${
                    this.state.projectName
                  }"/>
                  <p>${this.state.infoProject}</p>                  
                  <a href="#">Link a ${
                    this.state.projectName
                  }</a>                  
                  </div>
              </div>
              <hr/>
                <div class ="row">
                  <div class ="col-12 text-center">
                    <h3>INFORMACION PERSONAL</h3>
                    <h6>${this.state.email}</h6>
                    <h6>${this.state.linkedin}</h6>
                  </div>
                </div>


            </div>
            </body>
            </html>`
          }
        ]
      }
    })
      .then(response =>
        // When get url back as a response, set state and go to a link in render
        this.setState({
          url: `https://${response.data.url}`,
          projectUrlName: this.state.projectName,

          // Loading... spinning
          loading: false
        })
      )
      .catch(error => console.log(error)); // PINTAR ERROR EN PANTALLA DE USUARIO
  };

  //     componentWillMount() {

  //   }

  render() {
    // Spinner Loading...
    let loading;
    if (this.state.loading) {
      loading = (
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      loading = (
        // Print link to project
        <a href={this.state.url} target="_blank" rel="noopener noreferrer">
          {this.state.projectUrlName}
        </a>
      );
    }

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
            {loading}
            <hr />
            {/*  ---------------------------------------- FORM BEGIN ---------------------------------------- */}
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
                    value={this.state.infoProject}
                    //   error={errors.password}
                    id="infoProject"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="InfoProject"
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
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
                    value={this.state.userName}
                    //   error={errors.password}
                    id="userName"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="Nombre"
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
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
                    value={this.state.userLastNameidoUsuario}
                    //   error={errors.password}
                    id="userLastNameidoUsuario"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="Apellidos"
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
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
                    value={this.state.userInfo}
                    //   error={errors.password}
                    id="userInfo"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="Full Stack - Front End..."
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
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
                    value={this.state.email}
                    //   error={errors.password}
                    id="email"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="email"
                  />
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
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
                    value={this.state.linkedin}
                    //   error={errors.password}
                    id="linkedin"
                    type="text"
                    //   className={classnames("form-control", {
                    //     invalid: errors.password || errors.passwordincorrect
                    //   })}
                    placeholder="linkedin"
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
                      {/* <p>Url: {deploy.url}</p> */}
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
export default ZeitApi;
