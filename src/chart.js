import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { unit } from "./variable.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {};
  chart = "";

  componentWillUpdate() {
    this.chart.options.data = this.generateData();
    this.chart.render();
  }

  generateDataPoints({ key, unit, title }) {
    var xVal = 1;
    var dps = [];
    this.props.data.forEach((element) => {
      console.log(element, element[key], key);
      if (element[key]) {
        dps.push({
          x: xVal,
          y: parseFloat(element[key], 10),
          time: element.time_s.replace("T", " ").split(".")[0],
          unit: unit,
          param: title,
        });
        xVal++;
      }
    });
    console.log(dps);
    return dps;
  }

  generateData() {
    let data = [];
    this.props.param.forEach((element, index) => {
      console.log(this.props.data[index], index);
      if (element)
        data.push({
          type: "spline",
          // xValueFormatString:
          //   element.param.title +
          //   " (" +
          //   element.param.unit +
          //   ") " +
          //   this.props.data[index]["time_s"],
          showInLegend: true,
          legendText: element.param.title,
          lineColor: element.color,
          markerColor: element.color,
          dataPoints: this.generateDataPoints(element.param),
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
        if (
          Number.isInteger(e.value) &&
          e.value <= e.chart.data[0].dataPoints.length &&
          e.value > 0
          // &&
          // this.props.data[e.value - 1][this.props.param[0].param.key] !==
          //   undefined &&
          // this.props.data[e.value - 1][this.props.param[0].param.key] !== null
        ) {
          //   console.log(this.props.data[e.value - 1], this.props.param);
          //   return this.props.data[e.value - 1].time_s
          //     .replace("T", " ")
          //     .split(".")[0];
          //   // let time = this.props.data[e.value - 1].time;
          //   // return `${time.substr(0, 4)}-${time.substr(4, 2)}-${time.substr(
          //   //   6,
          //   //   2
          //   // )} ${time.substr(8, 2)}:${time.substr(10, 2)}:${time.substr(12, 2)}`;
          // } else return "";
          console.log(e.chart.data[0].dataPoints, e.value);
          return e.chart.data[0].dataPoints[e.value - 1].time;
        }
        return "";
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
    toolTip: {
      content: "{param}: {y} {unit} ({time})",
    },
  };

  render() {
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
