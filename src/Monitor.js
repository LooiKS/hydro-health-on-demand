import React, { Component } from "react";
import ReactDOM from "react-dom";
import Horseshoe from "./Horseshoe";
import LineGraph from "./LineGraph";
import HomeComp from "./HomeComp";
import CanvasJSReact from "./canvasjs.react";
import Chart from "./chart.js";
import { xpandUrl, unit } from "./variable";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

window.onload = function () {
  // console.log("loaded");

  window.addEventListener("DOMContentLoaded", (event) => {
    // console.log("cb loaded");

    ReactDOM.render({ HomeComp }, document.getElementById("root"));
    // console.log("cb loaded");
  });
  // console.log("loaded");
};
// const parameter = ['conductivity', 'oxygen', 'tds', 'turbidity', 'ph', 'temperature'];
let loading = false;
let tempRes = [];
class Monitor extends Component {
  update(prevProps) {
    // if (prevProps != this.props) {
    console.log("monitor", this.props);

    var result = this.props.params.params;
    var temp = this.state.values;

    // console.log("temp", temp);
    temp.conductivity = this.changeProgressDial(
      this.state.values.conductivity,
      (result[xpandUrl.paramsDto.deviceIDs][0][unit.conductivity.key] / 6000) *
        100
    );
    temp.oxygen = this.changeProgressDial(
      this.state.values.oxygen,
      (result[xpandUrl.paramsDto.deviceIDs][0][unit.oxygen.key] / 8.8) * 100
    );
    temp.tds = this.changeProgressDial(
      this.state.values.tds,
      (result[xpandUrl.paramsDto.deviceIDs][0][unit.tds.key] / 3500) * 100
    );
    temp.turbidity = this.changeProgressDial(
      this.state.values.turbidity,
      (result[xpandUrl.paramsDto.deviceIDs][0][unit.turbidity.key] / 50) * 100
    );
    temp.ph = this.changeProgressDial(
      this.state.values.ph,
      ((result[xpandUrl.paramsDto.deviceIDs][0][unit.ph.key] - 5) / 9) * 100
    );
    temp.temperature = this.changeProgressDial(
      this.state.values.temperature,
      ((result[xpandUrl.paramsDto.deviceIDs][0][unit.temperature.key] - 16) /
        24) *
        100
    );
    temp.ammonium = this.changeProgressDial(
      this.state.values.ammonium,
      (result[xpandUrl.paramsDto.deviceIDs][0][unit.ammonium.key] / 2.7) * 100
    );

    // for (var i = value.length - 1; i >= 0; i--) {
    // 	this.changeProgressDial(this.state.valuevalue[i]
    // }

    // this.setState({values: temp});
    this.setState({
      values: temp,
      response: result[xpandUrl.paramsDto.deviceIDs].reverse(),
      isLoading: false,
    });
    loading = false;
    // }
  }

  componentDidMount() {
    console.log("mon", this.props);
    this.update();
  }

  state = {
    param: [
      "Electrical Conductivity",
      "Dissolved Oxygen",
      "Total Dissolved Solids",
      "Turbidity",
      "pH",
      "Temperature",
      "Ammonium",
    ],
    dataSelected: "tds",
    unit: ["μS", "mg/L", "mg/L", "NTU", "", "℃", "mg/L"],
    isLoading: true,
    response: [
      {
        turbidity: "10.0",
        tds: "26.7",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "29.6",
        ph: "7.4",
        timestamp_s: "1568132527788",
        time_s: "2019-09-11T00:22:07.788",
        oxygen: "8.8",
        mac_s: "3426465185477481",
        wqi: "48.3",
      },
      {
        turbidity: "100.9",
        tds: "32.7",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "29.8",
        ph: "7.9",
        timestamp_s: "1568132001675",
        time_s: "2019-09-11T00:13:21.675",
        oxygen: "9.1",
        mac_s: "3426465185477481",
        wqi: "33.1",
      },
      {
        turbidity: "3.8",
        tds: "2.1",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "27.3",
        ph: "9.1",
        timestamp_s: "1558700348374",
        time_s: "2019-05-24T20:19:08.374",
        oxygen: "7.3",
        mac_s: "3426465185477481",
        wqi: "45.0",
      },
      {
        turbidity: "3.8",
        tds: "98.0",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "27.6",
        ph: "9.3",
        timestamp_s: "1558700278550",
        time_s: "2019-05-24T20:17:58.550",
        oxygen: "3.5",
        mac_s: "3426465185477481",
        wqi: "31.4",
      },
      {
        turbidity: "3.8",
        tds: "0.0",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "28.9",
        ph: "9.3",
        timestamp_s: "1558693401451",
        time_s: "2019-05-24T18:23:21.451",
        oxygen: "7.1",
        mac_s: "3426465185477481",
        wqi: "43.8",
      },
      {
        turbidity: "3.8",
        tds: "0.0",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "28.8",
        ph: "9.3",
        timestamp_s: "1558693334911",
        time_s: "2019-05-24T18:22:14.911",
        oxygen: "7.0",
        mac_s: "3426465185477481",
        wqi: "43.7",
      },
      {
        turbidity: "3.8",
        tds: "0.0",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "28.9",
        ph: "9.3",
        timestamp_s: "1558693268038",
        time_s: "2019-05-24T18:21:08.038",
        oxygen: "7.1",
        mac_s: "3426465185477481",
        wqi: "43.8",
      },
    ],
    //   {
    // conductivity: "0.0",
    // mac_s: "3426465185477481",
    // oxygen: "8.8",
    // ph: "7.4",
    // stateName_s: "<none>",
    // tds: "26.7",
    // temperature: "29.6",
    // time_s: "2019-09-11T00:22:07.788",
    // timestamp_s: "1568132527788",
    // turbidity: "10.0",
    // wqi: "48.3"
    //   }
    values: {
      conductivity: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      oxygen: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      tds: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      turbidity: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      ph: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      temperature: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
      ammonium: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50,
      },
    },
  };

  chart = "";

  abortController = new AbortController();
  UNSAFE_componentWillMount() {
    // this.get_xpand();
    loading = true;
    this.lookupInterval = setInterval(() => {
      // console.log("out");
      if (!loading) {
        loading = true;
        // this.get_xpand();
        // alert(JSON.stringify(this.chart.options.data[0].dataPoints));
        // this.chart.options.data[0].dataPoints = this.generateDataPoints();
        // // console.log("pts", this.chart.options.data[0].dataPoints);
        // this.chart.render();
        // console.log("in");
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.lookupInterval);
    this.abortController.abort();
  }

  // chart = CanvasJSChart.render

  generateDataPoints(noOfDps) {
    var xVal = 1,
      yVal = 100;
    var dps = [];
    // for (var i = 0; i < noOfDps; i++) {
    //   yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
    this.state.response.forEach((element) => {
      dps.push({
        // x: new Date(parseInt(element.timestamp_s, 10)),
        x: xVal,
        y: Math.round(element.turbidity),
      });
      xVal++;
    });
    // }
    // console.log("dps", dps);
    return dps;
  }
  // tempRes = this.state.response;

  options = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "",
    },
    axisX: {
      labelFormatter: (e) => {
        // console.log("thi", e.value);
        if (
          Number.isInteger(e.value) &&
          e.value <= this.state.response.length &&
          e.value > 0
        )
          return this.state.response[e.value - 1].time_s
            .replace("T", " ")
            .split(".")[0];
        else return "";
      },
    },
    data: [
      {
        type: "spline",
        xValueFormatString: "MMM YY",
        dataPoints: this.generateDataPoints(500),
      },
    ],
  };

  render() {
    // var value[];
    // var chart = this.chart;
    // chart.render();
    // console.log("temp", Monitor, this.state.response);
    if (this.state.isLoading) {
      return <div>Loading Data of {this.props.locationSel}</div>;
    } else {
      return (
        <React.Fragment>
          <div
            style={{
              backgroundColor: "black",
              zIndex: -1,
              position: "relative",
            }}
          >
            <div className="monitor_status_bar">
              <h2 className="page-header">
                Monitor Parameter Value at {this.props.locationSel}
              </h2>
              <div className="upper_status_bar row">
                {/* <div
              // onClick={() => {
              //   // console.log("aaa");
              // }}
              > */}
                <Horseshoe
                  num="1"
                  param={this.state.param[0]}
                  unit={this.state.unit[0]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.conductivity.key
                    ]
                  }
                  marker_degree={this.state.values.conductivity.marker}
                  left_degree={this.state.values.conductivity.left}
                  right_degree={this.state.values.conductivity.right}
                  onClick={(res) => {
                    // console.log(res);
                  }}
                />
                {/* </div> */}
                <Horseshoe
                  num="2"
                  param={this.state.param[1]}
                  unit={this.state.unit[1]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.oxygen.key
                    ]
                  }
                  marker_degree={this.state.values.oxygen.marker}
                  left_degree={this.state.values.oxygen.left}
                  right_degree={this.state.values.oxygen.right}
                />
                <Horseshoe
                  num="3"
                  param={this.state.param[2]}
                  unit={this.state.unit[2]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.tds.key
                    ]
                  }
                  marker_degree={this.state.values.tds.marker}
                  left_degree={this.state.values.tds.left}
                  right_degree={this.state.values.tds.right}
                />
                <Horseshoe
                  num="0"
                  // param={this.state.param[2]}
                  // unit={this.state.unit[2]}
                  // value={this.state.response[this.state.response.length - 1].tds}
                  marker_degree={this.state.values.tds.marker}
                  left_degree={this.state.values.tds.left}
                  right_degree={this.state.values.tds.right}
                />
              </div>
              <div className="upper_status_bar row">
                {/* <Horseshoe
                  num="0"
                  // param={this.state.param[3]}
                  // unit={this.state.unit[3]}
                  // value={
                  //   this.state.response[this.state.response.length - 1][
                  //     unit.turbidity.key
                  //   ]
                  // }
                  marker_degree={this.state.values.turbidity.marker}
                  left_degree={this.state.values.turbidity.left}
                  right_degree={this.state.values.turbidity.right}
                /> */}
                <Horseshoe
                  num="5"
                  param={this.state.param[4]}
                  unit={this.state.unit[4]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.ph.key
                    ]
                  }
                  marker_degree={this.state.values.ph.marker}
                  left_degree={this.state.values.ph.left}
                  right_degree={this.state.values.ph.right}
                />
                <Horseshoe
                  num="6"
                  param={this.state.param[5]}
                  unit={this.state.unit[5]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.temperature.key
                    ]
                  }
                  marker_degree={this.state.values.temperature.marker}
                  left_degree={this.state.values.temperature.left}
                  right_degree={this.state.values.temperature.right}
                />
                <Horseshoe
                  num="7"
                  param={this.state.param[6]}
                  unit={this.state.unit[6]}
                  value={
                    this.state.response[this.state.response.length - 1][
                      unit.ammonium.key
                    ]
                  }
                  marker_degree={this.state.values.ammonium.marker}
                  left_degree={this.state.values.ammonium.left}
                  right_degree={this.state.values.ammonium.right}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "black",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <div>
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.conductivity, color: "#a4ba32" }, //#f5de9f" },
                  { param: unit.oxygen, color: "rgb(0, 253, 213)" }, //#aeff00" },
                  { param: unit.tds, color: "rgb(255, 253, 213)" }, //#00ffee" },
                  { param: unit.turbidity, color: "rgb(118, 139, 234)" }, //#ff00b5" },
                  { param: unit.ph, color: "rgb(57, 255, 0)" }, //#7a7cff" },
                  { param: unit.temperature, color: "rgb(0, 189, 0)" }, //#ffadb4" }
                  { param: unit.ammonium, color: "rgb(255, 100, 0)" }, //#ffadb4" }
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.wqi, color: "rgb(57, 255, 0)" }, //#7a7cff" },
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.ph, color: "rgb(57, 255, 0)" }, //#7a7cff" },
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.temperature, color: "rgb(0, 189, 0)" }, //#ffadb4" }
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.tds, color: "rgb(255, 253, 213)" }, //#00ffee" },
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.oxygen, color: "rgb(0, 253, 213)" }, //#aeff00" },
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.ammonium, color: "rgb(255, 100, 0)" }, //#ffadb4" }
                ]}
                // onRef={ref => (this.chart = ref)}
              />
              <Chart
                data={this.state.response}
                param={[
                  { param: unit.conductivity, color: "#a4ba32" }, //#f5de9f" },
                ]}

                // onRef={ref => (this.chart = ref)}
              />
              {/* <Chart
                data={this.state.response}
                param={[
                  { param: unit.turbidity, color: "rgb(118, 139, 234)" }, //#ff00b5" },
                ]}
                // onRef={ref => (this.chart = ref)}
              /> */}
              {/* <LineGraph
                data={this.state.response}
                dataSelected={[
                  { param: "oxygen", color: "#a4ba32" },
                  { param: "tds", color: "rgb(0, 253, 213)" },
                  { param: "turbidity", color: "rgb(255, 253, 213)" },
                  { param: "ph", color: "rgb(118, 139, 234)" },
                  { param: "temperature", color: "rgb(57, 255, 0)" },
                  { param: "conductivity", color: "rgb(0, 189, 0)" }
                ]}
              />
              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "oxygen", color: "red" }]}
              />

              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "tds", color: "yellow" }]}
              />
              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "turbidity", color: "blue" }]}
              />
              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "ph", color: "green" }]}
              />
              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "temperature", color: "orange" }]}
              />
              <LineGraph
                data={this.state.response}
                dataSelected={[{ param: "conductivity", color: "violet" }]}
              /> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  changeProgressDial(value, calculatedPercent) {
    if (calculatedPercent <= 66) {
      // Ensure the right side is hidden
      value.right = -181;
      if (value.oldValue > 66) {
        value.right = -181;
        value.marker = 0;
      }
      var leftDeg = -Math.abs(180 - Math.round(2.7 * calculatedPercent));
      // var threshold = oldValue > 66 ? 67 : oldValue;
      value.left = leftDeg + 1;
      value.marker = leftDeg;
    } else {
      // See if LHS needs to change
      if (value.oldValue <= 66) {
        value.left = 0;
        value.marker = 0;
      }
      var rightDeg = -90 - (100 - calculatedPercent) * 2.7;
      value.right = rightDeg;
      value.marker = 180 + rightDeg;
    }
    value.oldValue = calculatedPercent;
    return value;
  }

  get_xpand(parameter, mode) {
    fetch(
      "http://localhost:8083/https://iot.xpand.asia/developer/api/applicationmgt/authenticate",
      {
        headers: {
          "X-Secret":
            "ZWR6QWltM2t5dHd4ZVNNcXYxYlpxa0hhcXpjYTpxN3hEdHBhd0NVTzk2a3VZcjdOMWlxXzkyYndh",
          "Content-Type": "application/json",
        },
        signal: this.abortController.signal,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        this.xpandGetJWT(result.access_token, parameter, mode);
      });
  }

  xpandGetJWT(accessToken, parameter, mode, data) {
    fetch(
      "http://localhost:8083/https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + accessToken,
        },
        body: JSON.stringify({
          username: "hydrohealthondemand@gmail.com",
          password: "teamh2o",
        }),
        signal: this.abortController.signal,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        this.xpandGetData(result["X-IoT-JWT"], accessToken, parameter, data);
      });
  }

  xpandGetData(jwt, accessToken, parameter, data) {
    var baseURL =
      "http://localhost:8083/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?";
    var eventName = "WaterQuality";
    var deviceIds = "20579";
    var noOfEvents = "7";
    var zoneId = "Asia%2FKuala_Lumpur";
    var eventParams =
      "temperature%2Cdissolve_oxygen%2CpH%2Cammonium%2Celectrical_conductivity%2Ctotal_dissolved_solid%2Cturbidity%2Cwater_quality_index";
    fetch(
      // baseURL +
      //   "eventName=" +
      //   eventName +
      //   "&deviceIds=" +
      //   deviceIds +
      //   "&noOfEvents=" +
      //   noOfEvents +
      //   "&zoneId=" +
      //   zoneId +
      //   "&eventParams=" +
      //   eventParams,
      "https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?eventName=WaterQuality&deviceIds=20579&noOfEvents=10&zoneId=Asia%2FKuala_Lumpur&eventParams=temperature%2Cdissolve_oxygen%2CpH%2Cammonium%2Celectrical_conductivity%2Ctotal_dissolved_solid%2Cturbidity%2Cwater_quality_index",
      {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
          "X-IoT-JWT": jwt,
        },
        signal: this.abortController.signal,
      }
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        // console.log("*************************", result);
        var temp = this.state.values;

        // console.log("temp", temp);
        temp.conductivity = this.changeProgressDial(
          this.state.values.conductivity,
          (result[deviceIds][0].conductivity / 6000) * 100
        );
        temp.oxygen = this.changeProgressDial(
          this.state.values.oxygen,
          (result[deviceIds][0].oxygen / 8.8) * 100
        );
        temp.tds = this.changeProgressDial(
          this.state.values.tds,
          (result[deviceIds][0].tds / 3500) * 100
        );
        temp.turbidity = this.changeProgressDial(
          this.state.values.turbidity,
          (result[deviceIds][0].turbidity / 50) * 100
        );
        temp.ph = this.changeProgressDial(
          this.state.values.ph,
          ((result[deviceIds][0].ph - 5) / 9) * 100
        );
        temp.temperature = this.changeProgressDial(
          this.state.values.temperature,
          ((result[deviceIds][0].temperature - 16) / 24) * 100
        );

        // for (var i = value.length - 1; i >= 0; i--) {
        // 	this.changeProgressDial(this.state.valuevalue[i]
        // }

        // this.setState({values: temp});
        this.setState({
          values: temp,
          response: result[deviceIds].reverse(),
          isLoading: false,
        });
        loading = false;
      });
  }
}

export default Monitor;
