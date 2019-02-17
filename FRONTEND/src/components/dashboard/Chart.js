import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import "./Charts.css";

export class Chart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Monthly Visits",
            data: [70, 50, 55, 50, 55, 45, 50, 55, 60, 55, 50, 60],
            backgroundColor: ["rgba(38, 202, 206, 0.4)"]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="container shadow">
              <div className="row">
                <div id="cube1" className="col-4 text-center">
                  <div className="row align-items-center centering">
                    <div className="col-12">
                      <i className="fas fa-mobile-alt fa-2x text-white" />
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center">
                  <h3 id="cube1-h3">TECH</h3>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="container shadow">
              <div className="row">
                <div id="cube2" className="col-4 text-center">
                  <div className="row align-items-center centering">
                    <div className="col-12">
                      <i className="far fa-share-square fa-2x text-white" />
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center">
                  <h3 id="cube2-h3">SHARE</h3>
                  <p>15</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="container shadow">
              <div className="row">
                <div id="cube3" className="col-4 text-center">
                  <div className="row align-items-center centering">
                    <div className="col-12">
                      <i className="fas fa-wallet fa-2x text-white" />
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center">
                  <h3 id="cube3-h3">TOTAL</h3>
                  <p>4</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="container shadow">
              <div className="row">
                <div id="cube4" className="col-4 text-center">
                  <div className="row align-items-center centering">
                    <div className="col-12">
                      <i className="far fa-heart fa-2x text-white" />
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center">
                  <h3 id="cube4-h3">LIVE</h3>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 shadow">
            <Line
              data={this.state.chartData}
              options={{
                maintainAspectRatio: true
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  text-center mt-4">
                <div className="shadow p-3">
                  <h4>INTERVIEW'S PROGRESS</h4>
                  <p>Interview 1</p>
                  <Progress 
                  theme={
                      {
                          active:{
                              symbol: '80%',
                              color: 'rgb(0, 182, 208)'
                          }
                      }
                  }
                  percent={88} />
                  <p>Interview 2</p>
                  <Progress percent={100} status="success" />
                </div>
              </div>
              <div className="col-lg-6 text-center mt-4">
                <div className="shadow p-3">
                  <h4>CODING TASK PROGRESS</h4>
                  <Progress type="circle" percent={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
