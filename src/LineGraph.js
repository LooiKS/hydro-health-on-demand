import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

class LineGraph extends Component {
  render() {
    let line = [];
    this.props.dataSelected.forEach(element => {
      line.push(
        <Line
          key={element}
          type="monotone"
          dataKey={element}
          stroke="#8884d8"
        />
      );
    });
    return (
      <LineChart width={1500} height={500} data={this.props.data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="time_s"
          interval={0}
          padding={{ left: 20, right: 100 }}
        />

        <YAxis allowDataOverflow={true}>
          <Label value="any" />
        </YAxis>
        <Tooltip />
        <Legend />
        {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
        {line}
      </LineChart>
    );
  }
}

export default LineGraph;
