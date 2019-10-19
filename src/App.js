import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Monitor from "./Monitor";
import HomeComp from "./HomeComp";
import logo from "./images/favicon.png";

function App() {
  const navbar_style = {
    backgroundColor: "blue",
    justifyContent: "flexStart !important",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    // justify-content: "space-between",
    padding: ".5rem 1rem"
  };

  const logoDiv = {
    width: "60%",
    color: "white",
    textAlign: "left",
    paddingLeft: "5em"
  };

  const buttonDiv = {
    width: "40%"
  };

  return (
    <div className="App">
      <Router>
        <div className="" style={navbar_style}>
          <div style={logoDiv}>
            <img src={logo} style={{ width: 2 + "em" }} alt="Water logo" />
            <span>Hydro Health On-demand</span>
          </div>
          <div style={buttonDiv}>
            <Link className="btn btn-success mx-2" to="/">
              Home
            </Link>
            <Link className="btn btn-success mx-2" to="monitor">
              Monitor
            </Link>
          </div>
        </div>
        <Route exact path="/" component={HomeComp} />

        <Route path="/monitor" component={Monitor} />
      </Router>
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="">
      <input className="btn" type="button"/>
      </div>*/}
    </div>
  );
}

export default App;
