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

      email: "cuc@cuc.com",
      linkedin: "",

      // Porfolio Info
      porfolioName: "",
      gitHubIcon: false,
      reactIcon: false,
      jsIcon: false,
      cssIcon: false,
      htmlIcon: false,
      angularIcon: false,

      // Project Info
      projectName1: "",
      infoProject1: "",
      projectName2: "",
      infoProject2: "",
      projectName3: "",
      infoProject3: "",
      // Checkbox tecnologias

      // Url when post, get response of page url
      url: "",
      zeitId: null,

      loading: false
    };

    this.handleClickGet = this.handleClickGet.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // ON CHANGE FORM
  onChange = e => {
    // To deal with different inputs
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [e.target.id]: value });
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
      .then(response=>console.log(response));

    // Delete from zeit
    axios
      .delete("https://api.zeit.co/v5/now/deployments/" + id, {
        headers: { Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG" }
      })
      .then(this.setState({ deploys: deploysArray }));
  };

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
    // .then(response => console.log(response.data.proyectsId));
  };

  // GET OF ALL PROJECTS DEPLOYS

  /*
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
  */

  // POST OF NEW PROJECTS
  handleClickPost = () => {
    this.setState({ loading: true });
    axios({
      method: "post",
      url: "https://api.zeit.co/v6/now/deployments",
      headers: {
        Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG"
      },
      data: {
        name: `${this.state.porfolioName}`,
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
            
            <link rel="stylesheet" href="https://dl.dropbox.com/s/nwa50n17k6v8s36/style.css?dl=0">
            
            <title>${this.state.porfolioName}</title>
            <style>
              img{
                max-height: 200px;
              }
              .false{
                display:none;
              }
            </style>


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
                  <i class="fab fa-github fa-3x ${this.state.gitHubIcon}"></i>
                  <i class="fab fa-react fa-3x ${this.state.reactIcon}"></i>
                  <i class="fab fa-js-square fa-3x ${this.state.jsIcon}"></i>
                  <i class="fab fa-css3-alt fa-3x ${this.state.cssIcon}"></i>
                  <i class="fab fa-html5 fa-3x ${this.state.htmlIcon}"></i>
                  <i class="fab fa-angular fa-3x ${this.state.angularIcon}"></i>
                </div>
              </div>
            <hr/>
              <div class ="row">
                <div class ="col-12 text-center">
                  <h3>PROYECTOS</h3>
                </div>
              </div>
              <div class ="row" id="myObject">
                <div class ="col-lg text-center">
                  <h4>${this.state.projectName1}</h4>
                  <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="${
                    this.state.projectName1
                  }"/>
                  <p>${this.state.infoProject1}</p>
                  <a href="#">Link a ${
                    this.state.projectName1
                  }</a>                  
                </div>
                <div class ="col-lg text-center">
                  <h4>${this.state.projectName2}</h4>
                  <img class="img-fluid" src="https://cdn-images-1.medium.com/max/1200/1*2p9Mg7T9SME9hMokF7omOw.png" alt="${
                    this.state.projectName2
                  }"/>
                  <p>${this.state.infoProject2}</p>                  
                  <a href="#">Link a ${
                    this.state.projectName2
                  }</a>                  
                </div>
                <div class ="col-lg text-center">
                  <h4>${this.state.projectName3}</h4>
                  <img class="img-fluid" src="https://cdn-images-1.medium.com/max/1200/1*2p9Mg7T9SME9hMokF7omOw.png" alt="${
                    this.state.projectName3
                  }"/>
                  <p>${this.state.infoProject3}</p>                  
                  <a href="#">Link a ${
                    this.state.projectName3
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
                <p id="demo"></p>

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
          // url: `https://${response.data.url}`,
          url: response.data.url,
          projectUrlName: `VER PORFOLIO - ${this.state.porfolioName}`,
          zeitId: response.data.id,

          // Loading... spinning
          loading: false
        })
      )
      .catch(error => console.log(error)); // PINTAR ERROR EN PANTALLA DE USUARIO
  };

  // Need to use componentDidUpdate to compare prevState and only send when is receive from the post to Zeit API
  componentDidUpdate(prevProps, prevState) {
    if (this.state.zeitId !== prevState.zeitId) {
      // Update Project array from DB (SEND EMAIL + UID FROM ZEIT WHEN DEPLOY)
      axios
        .post("projects/addprojects", {
          email: this.state.email,
          proyectsId: this.state.zeitId,
          proyectsName: this.state.porfolioName,
          proyectUrl: this.state.url
        })
        .then(response => console.log(response));
    }
  }

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
            <form noValidate onSubmit={this.handleSubmit}>
              <div className="container border">
                <h4>INFO PERSONAL:</h4>
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
                </div>
                {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span> */}
              </div>
              {/* -------------------------------------------- DATOS PORFOLIO -------------------------------------------- */}
              <div className="container border">
                <h4>DATOS PORFOLIO:</h4>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      placeholder="Nombre Porfolio"
                      onChange={this.onChange}
                      value={this.state.porfolioName}
                      //   error={errors.email}
                      id="porfolioName"
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="reactIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="reactIcon">
                      React
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="gitHubIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="gitHubIcon">
                      GitHub
                    </label>
                  </div>
                  {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="jsIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="jsIcon">
                      JavaScript
                    </label>
                  </div>
                  {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="cssIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="cssIcon">
                      CSS
                    </label>
                  </div>
                  {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="htmlIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="htmlIcon">
                      HTML
                    </label>
                  </div>
                  {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={this.onChange}
                      id="angularIcon"
                      //   error={errors.email}
                      //   className={classnames("form-control", {
                      //     invalid: errors.email || errors.emailnotfound
                      //   })}
                    />
                    <label className="form-check-label" htmlFor="angularIcon">
                      Angular
                    </label>
                  </div>
                  {/* <span className="text-danger">
                    {errors.email}
                    {errors.emailnotfound}
                  </span> */}
                </div>
              </div>
              {/* -------------------------------------------- PROYECTO #1 -------------------------------------------- */}
              <div className="container border">
                <h4>PROYECTO #1:</h4>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      placeholder="Nombre del Proyecto #1"
                      onChange={this.onChange}
                      value={this.state.projectName1}
                      //   error={errors.email}
                      id="projectName1"
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
                      value={this.state.infoProject1}
                      //   error={errors.password}
                      id="infoProject1"
                      type="text"
                      //   className={classnames("form-control", {
                      //     invalid: errors.password || errors.passwordincorrect
                      //   })}
                      placeholder="Info del proyecto #1"
                    />
                  </div>
                  {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span> */}
                </div>
              </div>
              {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  </div> */}
              {/* --------------------------------------------- PROYECTO #2 --------------------------------------------- */}
              <div className="container border">
                <h4>PROYECTO #2:</h4>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      placeholder="Nombre del Proyecto #2"
                      onChange={this.onChange}
                      value={this.state.projectName2}
                      //   error={errors.email}
                      id="projectName2"
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
                      value={this.state.infoProject2}
                      //   error={errors.password}
                      id="infoProject2"
                      type="text"
                      //   className={classnames("form-control", {
                      //     invalid: errors.password || errors.passwordincorrect
                      //   })}
                      placeholder="Info del Proyecto #2"
                    />
                  </div>
                  {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span> */}
                </div>
              </div>

              {/* --------------------------------------------- PROYECTO #3 --------------------------------------------- */}

              <div className="container border">
                <h4>PROYECTO #3:</h4>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      placeholder="Nombre del Proyecto #3"
                      onChange={this.onChange}
                      value={this.state.projectName3}
                      //   error={errors.email}
                      id="projectName3"
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
                      value={this.state.infoProject3}
                      //   error={errors.password}
                      id="infoProject3"
                      type="text"
                      //   className={classnames("form-control", {
                      //     invalid: errors.password || errors.passwordincorrect
                      //   })}
                      placeholder="Info del Proyecto #3"
                    />
                  </div>
                  {/* <span className="text-danger">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span> */}
                </div>
              </div>
              {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  </div> */}
            </form>
          </div>
          {/*  ----------------------------------- GET DEPLOYS ----------------------------------- */}
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
      </div>
    );
  }
}
export default ZeitApi;
