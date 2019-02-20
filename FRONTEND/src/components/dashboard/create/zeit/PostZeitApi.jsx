import React, { Component } from "react";

import axios from "axios";

// Redux
import { connect } from "react-redux";

// Assets
import backgroundAssets from "../../../../assets/img/background.png";

// Components
import LoadingSpinnerCircle from "../../../../utils/LoadingSpinnerCircle";

export class PostZeitApi extends Component {
  constructor() {
    super();
    this.state = {
      // Url when post, get response of page url
      url: "",
      zeitId: null,

      loading: false
    };
  }

  // POST OF NEW PROJECTS
  handleClickPost = () => {
    let portfolioInfo = this.props.createPortfolio.portfolioInfo;
    let personalInfo = this.props.createPortfolio.personalInfo;
    let projectsInfo = this.props.createPortfolio.projectsInfo;

    this.setState({ loading: true });
    axios({
      method: "post",
      url: "https://api.zeit.co/v6/now/deployments",
      headers: {
        Authorization: "Bearer Vh3Xd5UOaFlaGMqtoutJ84dG"
      },
      data: {
        name: `${portfolioInfo.portfolioName}`,
        public: false,
        version: 2,
        files: [
          {
            file: "index.html",
            data: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <title>${portfolioInfo.portfolioName}</title>
                <style>
                .false{
                  display:none !important;
                }
              </style>

                <!-- Bootstrap core CSS -->
                <link
                  rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                  crossorigin="anonymous"
                />

                <!-- Custom fonts for this template -->
                <link
                  href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
                  rel="stylesheet"
                />
                <link
                  href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
                  rel="stylesheet"
                />

                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                  integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                  crossorigin="anonymous"
                />

                <!-- Custom styles for this template -->
                <link href="https://dl.dropbox.com/s/t1t2dpbv69s3480/portfolio.css?dl=0" rel="stylesheet">
              </head>

              <body id="page-top">
                <nav
                  class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
                  id="sideNav"
                >
                  <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <span class="d-block d-lg-none">Clarence Taylor</span>
                    <span class="d-none d-lg-block">
                      <img
                        class="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src="https://dl.dropbox.com/s/0gfouulphaqs0es/profile.jpg?dl=0"
                        alt="profile-img"
                      />
                    </span>
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#experience"
                          >Projects</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div class="container-fluid p-0">
                  <section
                    class="resume-section p-3 p-lg-5 d-flex align-items-center"
                    id="about"
                  >
                    <div class="w-100">
                      <h1 class="mb-0">
                        ${personalInfo.userName}
                        <span class="text-primary">${
                          personalInfo.userLastName
                        }</span>
                      </h1>
                      <div class="subheading mb-5">
                      ${personalInfo.userInfo}
                        <a href="mailto:${personalInfo.email}">${
              personalInfo.email
            }</a>
                      </div>
                      <div class="social-icons">
                        <a href="${personalInfo.linkedin}">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="${personalInfo.github}">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </section>

                  <hr class="m-0" />

                  <section
                    class="resume-section p-3 p-lg-5 d-flex justify-content-center"
                    id="experience"
                  >
                    <div class="w-100">
                      <h2 class="mb-5">Projects</h2>

                      <div
                        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                      >
                        <div class="resume-content">
                          <h3 class="mb-0">${projectsInfo.projectName1}</h3>
                          <p>
                          ${projectsInfo.infoProject1}
                          </p>
                        </div>
                        <div class="resume-date text-md-right">
                          <a href="${projectsInfo.urlProject1}"><span class="text-primary">SHOW PROJECT</span></a>
                        </div>
                      </div>

                      <div
                        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                      >
                        <div class="resume-content">
                          <h3 class="mb-0">${projectsInfo.projectName2}</h3>
                          <p>
                          ${projectsInfo.infoProject2}
                          </p>
                        </div>
                        <div class="resume-date text-md-right">
                          <a href="${projectsInfo.urlProject2}"><span class="text-primary">SHOW PROJECT</span></a>
                        </div>
                      </div>

                      <div
                        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                      >
                        <div class="resume-content">
                          <h3 class="mb-0">${projectsInfo.projectName3}</h3>
                          <p>
                            ${projectsInfo.infoProject3}
                          </p>
                        </div>
                        <div class="resume-date text-md-right">
                          <a href="${projectsInfo.urlProject3}"><span class="text-primary">SHOW PROJECT</span></a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <hr class="m-0" />

                  <hr class="m-0" />

                  <section
                    class="resume-section p-3 p-lg-5 d-flex align-items-center"
                    id="skills"
                  >
                    <div class="w-100">
                      <h2 class="mb-5">Skills</h2>

                      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                      <ul class="list-inline dev-icons">
                        <li class="list-inline-item  ${portfolioInfo.htmlIcon}">
                          <i class="fab fa-html5"></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.cssIcon
                        }">
                          <i class="fab fa-css3-alt "></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.jsIcon
                        }">
                          <i class="fab fa-js-square "></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.angularIcon
                        }">
                          <i class="fab fa-angular "></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.reactIcon
                        }">
                          <i class="fab fa-react "></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.nodeJsIcon
                        }">
                          <i class="fab fa-node-js"></i>
                        </li>
                        <li class="list-inline-item ${
                          portfolioInfo.sassIcon
                        }">
                          <i class="fab fa-sass"></i>
                        </li>
                      </ul>

                      <div class="subheading mb-3">Workflow</div>
                      <ul class="fa-ul mb-0">
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Mobile-First, Responsive Design
                        </li>
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Cross Functional Teams
                        </li>
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Agile Development &amp; Scrum
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                <!-- Bootstrap core JavaScript -->
                <!-- <script src="vendor/jquery/jquery.min.js"></script> -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>

                <!-- Plugin JavaScript -->
                <!-- <script src="vendor/jquery-easing/jquery.easing.min.js"></script> -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

                <!-- Custom scripts for this template -->
                <script src="https://dl.dropbox.com/s/bvn4qnvzdecs3xv/resume.min.js?dl=0"></script>
              </body>
            </html>
             
              `
          }
        ]
      }
    })
      .then(response =>
        // When get url back as a response, set state and go to a link in render
        this.setState({
          // url: `https://${response.data.url}`,
          url: response.data.url,
          // projectUrlName: `VER PORFOLIO - ${this.state.porfolioName}`,
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
        .post("http://localhost:3000/projects/addprojects", {
          email: this.props.createPortfolio.personalInfo.email,
          proyectsId: this.state.zeitId,
          proyectsName: this.props.createPortfolio.portfolioInfo.portfolioName,
          proyectUrl: this.state.url,
          angularIcon: this.props.createPortfolio.portfolioInfo.angularIcon,
          reactIcon: this.props.createPortfolio.portfolioInfo.reactIcon
        })
        .then(response => console.log(response));
    }
  }

  componentDidMount() {
    this.handleClickPost();
  }

  render() {
    // Props
    const portfolioInfo = this.props.createPortfolio.portfolioInfo;

    // Spinner Loading...
    let loading;

    if (this.state.loading) {
      loading = <LoadingSpinnerCircle />;
    } else {
      loading = (
        // Print link to project
        <div className="row">
          <div className="col-md-4 offset-md-3">
            <div className="card profile-card-3 shadow mt-4">
              <div className="background-block">
                <img
                  src={backgroundAssets}
                  alt="profile-sample1"
                  className="background"
                />
              </div>
              <div className="profile-thumb-block">
                {portfolioInfo.angularIcon ? (
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
                  {portfolioInfo.portfolioName}
                  <small>Portfolio</small>
                </h2>
                <div className="icon-block">
                  <a
                    href={`https://${this.state.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>{loading}</div>;
  }
}

const mapStateToProps = state => ({
  createPortfolio: state.createPortfolio
});
export default (PostZeitApi = connect(
  mapStateToProps,
  {}
)(PostZeitApi));
