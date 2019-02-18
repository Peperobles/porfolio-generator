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
            // data: `<h1>Hola esto es una: ${this.state.data}</h1>`
            data: `
              <html>
              <head>
              <!-- Latest compiled and minified CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
              
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
              
              <link rel="stylesheet" href="https://dl.dropbox.com/s/nwa50n17k6v8s36/style.css?dl=0">
              
              <title>${portfolioInfo.portfolioName}</title>
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
                    <h2>${personalInfo.userName}</h2>
                    <h3>${personalInfo.userLastName}</h3>
                    <h6>${personalInfo.userInfo}</h6>
                  </div>
                </div>
              <hr/>
                <div class ="row">
                  <div class ="col-12 text-center">
                  <h3>TECNOLOGIAS</h3>
                    <i class="fab fa-github fa-3x ${
                      portfolioInfo.gitHubIcon
                    }"></i>
                    <i class="fab fa-react fa-3x ${
                      portfolioInfo.reactIcon
                    }"></i>
                    <i class="fab fa-js-square fa-3x ${
                      portfolioInfo.jsIcon
                    }"></i>
                    <i class="fab fa-css3-alt fa-3x ${
                      portfolioInfo.cssIcon
                    }"></i>
                    <i class="fab fa-html5 fa-3x ${portfolioInfo.htmlIcon}"></i>
                    <i class="fab fa-angular fa-3x ${
                      portfolioInfo.angularIcon
                    }"></i>
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
                    <h4>${projectsInfo.projectName1}</h4>
                    <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="${
                      projectsInfo.projectName1
                    }"/>
                    <p>${projectsInfo.infoProject1}</p>
                    <a href="#">Link a ${
                      projectsInfo.projectName1
                    }</a>                  
                  </div>
                  <div class ="col-lg text-center">
                    <h4>${projectsInfo.projectName2}</h4>
                    <img class="img-fluid" src="https://cdn-images-1.medium.com/max/1200/1*2p9Mg7T9SME9hMokF7omOw.png" alt="${
                      projectsInfo.projectName2
                    }"/>
                    <p>${projectsInfo.infoProject2}</p>                  
                    <a href="#">Link a ${
                      projectsInfo.projectName2
                    }</a>                  
                  </div>
                  <div class ="col-lg text-center">
                    <h4>${projectsInfo.projectName3}</h4>
                    <img class="img-fluid" src="https://cdn-images-1.medium.com/max/1200/1*2p9Mg7T9SME9hMokF7omOw.png" alt="${
                      projectsInfo.projectName3
                    }"/>
                    <p>${projectsInfo.infoProject3}</p>                  
                    <a href="#">Link a ${
                      projectsInfo.projectName3
                    }</a>                  
                  </div>
                  
                </div>
                <hr/>
                  <div class ="row">
                    <div class ="col-12 text-center">
                      <h3>INFORMACION PERSONAL</h3>
                      <h6>${personalInfo.email}</h6>
                      <h6>${personalInfo.linkedin}</h6>
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

    return (
      <div>
          {loading}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  createPortfolio: state.createPortfolio
});
export default (PostZeitApi = connect(
  mapStateToProps,
  {}
)(PostZeitApi));
