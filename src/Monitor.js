import React, { Component } from "react";
import Horseshoe from "./Horseshoe";
import LineGraph from "./LineGraph";

// const parameter = ['conductivity', 'oxygen', 'tds', 'turbidity', 'ph', 'temperature'];
let loading = false;
class Monitor extends Component {
  state = {
    param: [
      "Conductivity",
      "Dissolved Oxygen",
      "Total Dissolved Solids",
      "Turbidity",
      "pH",
      "Temperature"
    ],
    dataSelected: "tds",
    unit: ["μS", "mg/L", "mg/L", "NTU", "", "℃"],
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
        wqi: "48.3"
      },
      {
        turbidity: "2895.9",
        tds: "32.7",
        stateName_s: "<none>",
        conductivity: "0.0",
        temperature: "29.8",
        ph: "7.9",
        timestamp_s: "1568132001675",
        time_s: "2019-09-11T00:13:21.675",
        oxygen: "9.1",
        mac_s: "3426465185477481",
        wqi: "33.1"
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
        wqi: "45.0"
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
        wqi: "31.4"
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
        wqi: "43.8"
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
        wqi: "43.7"
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
        wqi: "43.8"
      }
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
        oldValue: 50
      },
      oxygen: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50
      },
      tds: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50
      },
      turbidity: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50
      },
      ph: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50
      },
      temperature: {
        marker: 0,
        left: 0,
        right: 0,
        oldValue: 50
      }
    }
  };

  abortController = new AbortController();
  UNSAFE_componentWillMount() {
    this.get_xpand();
    loading = true;
    this.lookupInterval = setInterval(() => {
      console.log("out");
      if (!loading) {
        loading = true;
        this.get_xpand();
        console.log("in");
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.lookupInterval);
    this.abortController.abort();
  }

  render() {
    // var value[];

    if (this.state.isLoading) {
      return <div>Loading Data</div>;
    } else {
      return (
        <div style={{ backgroundColor: "black" }}>
          <div className="monitor_status_bar">
            <h2 className="page-header">Monitor Parameter Value</h2>
            <div className="upper_status_bar">
              {/* <div
              // onClick={() => {
              //   console.log("aaa");
              // }}
              > */}
              <Horseshoe
                num="1"
                param={this.state.param[0]}
                unit={this.state.unit[0]}
                value={
                  this.state.response[this.state.response.length - 1]
                    .conductivity
                }
                marker_degree={this.state.values.conductivity.marker}
                left_degree={this.state.values.conductivity.left}
                right_degree={this.state.values.conductivity.right}
                onClick={res => {
                  console.log(res);
                }}
              />
              {/* </div> */}
              <Horseshoe
                num="2"
                param={this.state.param[1]}
                unit={this.state.unit[1]}
                value={
                  this.state.response[this.state.response.length - 1].oxygen
                }
                marker_degree={this.state.values.oxygen.marker}
                left_degree={this.state.values.oxygen.left}
                right_degree={this.state.values.oxygen.right}
              />
              <Horseshoe
                num="3"
                param={this.state.param[2]}
                unit={this.state.unit[2]}
                value={this.state.response[this.state.response.length - 1].tds}
                marker_degree={this.state.values.tds.marker}
                left_degree={this.state.values.tds.left}
                right_degree={this.state.values.tds.right}
              />
            </div>
            <div className="lower_status_bar">
              <Horseshoe
                num="4"
                param={this.state.param[3]}
                unit={this.state.unit[3]}
                value={
                  this.state.response[this.state.response.length - 1].turbidity
                }
                marker_degree={this.state.values.turbidity.marker}
                left_degree={this.state.values.turbidity.left}
                right_degree={this.state.values.turbidity.right}
              />
              <Horseshoe
                num="5"
                param={this.state.param[4]}
                unit={this.state.unit[4]}
                value={this.state.response[this.state.response.length - 1].ph}
                marker_degree={this.state.values.ph.marker}
                left_degree={this.state.values.ph.left}
                right_degree={this.state.values.ph.right}
              />
              <Horseshoe
                num="6"
                param={this.state.param[5]}
                unit={this.state.unit[5]}
                value={
                  this.state.response[this.state.response.length - 1]
                    .temperature
                }
                marker_degree={this.state.values.temperature.marker}
                left_degree={this.state.values.temperature.left}
                right_degree={this.state.values.temperature.right}
              />
            </div>
          </div>
          <div>
            <LineGraph
              data={this.state.response}
              dataSelected={[
                "oxygen",
                "tds",
                "turbidity",
                "ph",
                "temperature",
                "conductivity"
              ]}
            />
            <LineGraph
              data={this.state.response}
              dataSelected={["conductivity"]}
            />

            <LineGraph data={this.state.response} dataSelected={["oxygen"]} />
            <LineGraph data={this.state.response} dataSelected={["tds"]} />
            <LineGraph
              data={this.state.response}
              dataSelected={["turbidity"]}
            />
            <LineGraph data={this.state.response} dataSelected={["ph"]} />
            <LineGraph
              data={this.state.response}
              dataSelected={["temperature"]}
            />
          </div>
        </div>
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
            "UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh",
          "Content-Type": "application/json"
        },
        signal: this.abortController.signal
      }
    )
      .then(response => response.json())
      .then(result => {
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
          Authorization: "Bearer" + " " + accessToken
        },
        body: JSON.stringify({
          username: "utmgroup02@noreply.com",
          password: "teamh2o"
        }),
        signal: this.abortController.signal
      }
    )
      .then(response => response.json())
      .then(result => {
        this.xpandGetData(result["X-IoT-JWT"], accessToken, parameter, data);
      });
  }

  xpandGetData(jwt, accessToken, parameter, data) {
    var baseURL =
      "http://localhost:8083/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?";
    var eventName = "Try";
    var deviceIds = "16492";
    var noOfEvents = "7";
    var zoneId = "Asia%2FKuala_Lumpur";
    // var startDate = '2018-08-09%2012%3A00%3A00'
    fetch(
      baseURL +
        "eventName=" +
        eventName +
        "&deviceIds=" +
        deviceIds +
        "&noOfEvents=" +
        noOfEvents +
        "&zoneId=" +
        zoneId,
      {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
          "X-IoT-JWT": jwt
        },
        signal: this.abortController.signal
      }
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        console.log("this value", JSON.stringify(result[deviceIds]));
        var temp = this.state.values;

        console.log("temp", temp);
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
          isLoading: false
        });
        loading = false;
      });
  }
}

export default Monitor;
