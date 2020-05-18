import React, { Component } from "react";

class TextBorder extends Component {
  render() {
    let _borderColor = "";
    let backgroundColor =
      this.props.borderColor.split(",")[0] +
      "," +
      this.props.borderColor.split(",")[1] +
      ",80%) ";
    for (var i = 1; i >= 0; i--) {
      _borderColor +=
        this.props.borderColor.split(",")[0] +
        "," +
        this.props.borderColor.split(",")[1] +
        "," +
        (i + 1) * 30 +
        "%) ";
    }
    for (var i = 0; i < 2; i++) {
      _borderColor +=
        this.props.borderColor.split(",")[0] +
        "," +
        this.props.borderColor.split(",")[1] +
        "," +
        (i + 1) * 30 +
        "%) ";
    }

    console.log(_borderColor);
    return (
      <div
        style={{
          //   border: "2px " + this.props.borderColor + " solid",
          borderColor: _borderColor,
          backgroundColor: backgroundColor,
          borderWidth: "15px",
          borderStyle: "solid",
          color: this.props.textColor,
          // "-webkit-text-stroke": "0.5px black",
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
