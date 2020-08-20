import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { unit } from "./variable.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {};
  chart = "";

  componentWillUpdate() {
    // console.log("chart render 1", this.chart.options.data);
    this.chart.options.data = this.generateData();
    // console.log();
    this.chart.render();
  }

  generateDataPoints(param) {
    var xVal = 1;
    var dps = [];
    // console.log("received", param);
    this.props.data.forEach((element) => {
      // console.log("element[param]", element[param], element, param);
      if (element[param])
        dps.push({
          x: xVal,
          y: parseFloat(element[param], 10),
        });
      xVal++;
    });
    return dps;
  }

  generateData() {
    let data = [];
    // console.log("param", this.props.param);
    this.props.param.forEach((element) => {
      // console.log("loopchart", element, element.param);
      if (element)
        data.push({
          type: "spline",
          xValueFormatString:
            element.param.title + " (" + element.param.unit + ")",
          showInLegend: true,
          legendText: element.param.title,
          lineColor: element.color,
          markerColor: element.color,
          dataPoints: this.generateDataPoints(element.param.key),
        });
    });
    return data;
  }

  options = {
    theme: "dark2", // "light1", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      fontFamily: "Comic Sans MS",
      text:
        this.props.param.length > 1
          ? "Overall"
          : this.props.param[0].param.title,
    },
    axisX: {
      title: "Date",
      labelFormatter: (e) => {
        // console.log("thi", e);
        if (
          Number.isInteger(e.value) &&
          e.value <= this.props.data.length &&
          e.value > 0
          // &&
          // this.props.data[e.value - 1][this.props.param]
        ) {
          // console.log("hi", this.props.data[e.value - 1], this.props.param);
          return this.props.data[e.value - 1].time_s
            .replace("T", " ")
            .split(".")[0];
          // let time = this.props.data[e.value - 1].time;
          // return `${time.substr(0, 4)}-${time.substr(4, 2)}-${time.substr(
          //   6,
          //   2
          // )} ${time.substr(8, 2)}:${time.substr(10, 2)}:${time.substr(12, 2)}`;
        } else return "";
      },
    },
    axisY: {
      includeZero: false,
      gridColor: "black",
      title:
        this.props.param.length > 1
          ? "Overall"
          : this.props.param[0].param.unit,
    },
    data: this.generateData(),
  };

  render() {
    // console.log(
    //   "chart render",
    //   this.props.param
    //   // unit[this.props.param.param].title,
    //   // this.props.param.param
    // );
    return (
      <div style={{ width: "90vw", display: "inline-flex" }}>
        <hr></hr>
        <CanvasJSChart
          options={this.options}
          onRef={(ref) => (this.chart = ref)}
        />
      </div>
    );
  }
}

export default Chart;
