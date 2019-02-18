import React, { Component } from "react";

import { CircleLoader } from "react-spinners";


export class LoadingSpinnerCircle extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row align-items-center" style={{ height: "80vh" }}>
          <div className="col-md-6 offset-md-5">
            <div className="sweet-loading">
              <CircleLoader
                sizeUnit={"px"}
                size={250}
                color={"#00CDB3"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingSpinnerCircle;
