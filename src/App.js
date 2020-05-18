import React, { useState, useEffect } from "react";
import { get_xpand } from "./getXpand";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Monitor from "./Monitor";
import HomeComp from "./HomeComp";
import logo from "./images/favicon.png";
import { location } from "./variable.js";

function App() {
  // fetch("http://localhost:8083/https://traffic.ls.hereapi.com/traffic/6.2/flow/json/8/134/86?apiKey=WjsBGdFvSK97byVwsm2rUHLMlPsGnEfcRgURoCv3Kzg").
  // then(res=>{return res.json()}).
  // then(re=>{console.log(re)});
  return <Main />;
}

const Main = () => {
  return <></>;
  // let lookupInterval = "";
  // const [params, setParams] = useState();
  // const [loc, setLoc] = useState();
  // useEffect(() => {
  //   // console.log(typeof location);
  //   get_xpand("init").then(result => {
  //     console.log("result app:", result.location);
  //     setLoc(result.location);
  //     setParams(result);
  //     console.log("App", loc);
  //     // setLocValue(result.location);
  //     // setParamValue(result.params);
  //   });
  //   // setLoading(true);
  //   lookupInterval = setInterval(() => {
  //     console.log("out11 app"); //, loading);
  //     // if (!loading) {
  //     // setLoading(false);

  //     get_xpand().then(result => {
  //       console.log("loop", result);
  //       setParams(result);
  //     });
  //     // console.log("in111");
  //     // }
  //   }, 5000);

  //   return function cleanup() {
  //     // abortController.abort();
  //     clearInterval(lookupInterval);
  //   };
  // }, []);

  // const [toShow, setToShow] = useState(false);
  // const [locationSelected, setLocationSelected] = useState("");

  // const navbar_style = {
  //   backgroundColor: "blue",
  //   justifyContent: "flexStart !important",
  //   position: "relative",
  //   display: "flex",
  //   flexWrap: "wrap",
  //   alignItems: "center",
  //   // justify-content: "space-between",
  //   padding: ".5rem 1rem"
  // };

  // const logoDiv = {
  //   width: "60%",
  //   color: "white",
  //   textAlign: "left",
  //   paddingLeft: "5em"
  // };

  // const buttonDiv = {
  //   width: "40%",
  //   display: "inline-flex",
  //   transform: "translateX(30%)"
  // };

  // function showMonitor(loc) {
  //   setToShow(true);
  //   setLocationSelected(loc);
  // }

  // function showHome() {
  //   setToShow(false);
  // }

  // window.onload = function() {
  //   console.log("app loaded");
  // };

  // function monitorButton() {
  //   let btn = [];
  //   location.forEach(element => {
  //     btn.push(
  //       <button
  //         onClick={() => showMonitor(element.name)}
  //         className="dropdown-item"
  //         href="#"
  //       >
  //         {element.name}
  //       </button>
  //     );
  //   });
  //   // console.log(btn);
  //   return btn;
  // }

  // return (
  //   <div className="App">
  //     {/* <Router> */}
  //     <div className="" style={navbar_style}>
  //       <div style={logoDiv}>
  //         <img src={logo} style={{ width: 2 + "em" }} alt="Water logo" />
  //         <span>Hydro Health On-demand</span>
  //       </div>
  //       <div style={buttonDiv}>
  //         <button onClick={showHome} className="btn btn-success mx-2">
  //           Home
  //         </button>
  //         <div className="dropdown">
  //           <button
  //             className="btn btn-success dropdown-toggle"
  //             type="button"
  //             id="dropdownMenuButton"
  //             data-toggle="dropdown"
  //             aria-haspopup="true"
  //             aria-expanded="false"
  //           >
  //             Monitor
  //           </button>
  //           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  //             {monitorButton()}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {toShow ? (
  //       <Monitor locationSel={locationSelected} params={params} />
  //     ) : (
  //       <HomeComp handler={showMonitor} params={params} location={loc} />
  //     )}
  //     {/* <Route exact path="/" component={HomeComp} /> */}
  //     {/* <Route path="/monitor" component={Monitor} /> */}
  //     {/* </Router> */}
  //     {/*  <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <div className="">
  //     <input className="btn" type="button"/>
  //     </div>*/}
  //   </div>
  // );
};

export default App;
