import React, { Component } from "react";

class Horseshoe extends Component {
  componentWillMount() {
    console.log(this.props.num);
  }

  render() {
    return (
      <div
        className={
          "param_" + (this.props.num < 4 ? "upper" : "lower") + "_column"
        }
      >
        <div className="horseshoe_upper_wrapper">
          <div className="horseshoe">
            <div className="radial-wrapper">
              <h1
                className={"param_value unit_value" + this.props.num}
                id="text1"
              >
                {this.props.value}
              </h1>
              <h1 className={"param_unit unit_value" + this.props.num}>
                {this.props.unit}
              </h1>
              <div className="radial-section radial-right-section">
                <div className={"wedge" + this.props.num}></div>
              </div>
              <div className="radial-section radial-left-section">
                <div className={"wedge" + this.props.num}></div>
              </div>
              <div className={"marker" + this.props.num + " start"}></div>
              <div className={"marker" + this.props.num + " end"}></div>
            </div>

            <div className="radial-wrapper radial-progress-wrapper">
              <div className="radial-section radial-right-section">
                <div
                  className={"wedge" + this.props.num}
                  id="right1"
                  style={{
                    WebkitTransform:
                      "rotateZ(" + this.props.right_degree + "deg)",
                    transform: "rotateZ(" + this.props.right_degree + "deg)"
                  }}
                ></div>
              </div>
              <div className="radial-section radial-left-section">
                <div
                  className={"wedge" + this.props.num}
                  id="left1"
                  style={{
                    WebkitTransform:
                      "rotateZ(" + this.props.left_degree + "deg)",
                    transform: "rotateZ(" + this.props.left_degree + "deg)"
                  }}
                ></div>
              </div>
              <div className={"marker" + this.props.num + " start"}></div>
              <div
                className={"marker" + this.props.num + " end"}
                id="marker1"
                style={{
                  WebkitTransform:
                    "rotateZ(" + this.props.marker_degree + "deg)",
                  transform: "rotateZ(" + this.props.marker_degree + "deg)"
                }}
              ></div>
            </div>
          </div>
          <h1 className="param_title">{this.props.param}</h1>
        </div>
      </div>
    );
  }
}

export default Horseshoe;
