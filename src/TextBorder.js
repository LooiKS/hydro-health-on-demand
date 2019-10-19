import React, { Component } from "react";

class TextBorder extends Component {
  render() {
    let _borderColor = "";
    for (var i = 0; i < 4; i++) {
      _borderColor +=
        this.props.borderColor.split(",")[0] +
        "," +
        this.props.borderColor.split(",")[1] +
        "," +
        (i + 1) * 25 +
        "%) ";
    }
    console.log(_borderColor);
    return (
      <div
        style={{
          //   border: "2px " + this.props.borderColor + " solid",
          borderColor: _borderColor,
          borderWidth: "15px",
          borderStyle: "solid",
          color: this.props.textColor,
          margin: "1vh 2.5vw"
        }}
      >
        <h4>{this.props.text}</h4>
        <h4>{this.props.count}</h4>
      </div>
    );
  }
}

export default TextBorder;
