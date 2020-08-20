import React, { useState, useEffect } from "react";
import { get_xpand } from "./getXpand";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from "react-mapbox-gl";
import TextBorder from "./TextBorder";
import { xpandUrl, unit } from "./variable";

// ES5
// var ReactMapboxGl = require('react-mapbox-gl');
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibG9vaWtpYW5zZW5nIiwiYSI6ImNqdWF3MzFrMzA2bmYzeXBkMGdkMTdsM2sifQ.SMkjjzrxv1Gwmf127YmGpA",
});

const center = [102.6715, 3.4177];
const zoom = [6];
let prevProps;

export const HomeComp = (props) => {
  // let routeHistory = useHistory();
  window.onload = function () {
    // console.log("home reload");
  };
  const [location, setLocation] = useState({
    location: [
      {
        lat: 1.5177,
        lon: 103.6715,
        name: "JB Sutera Mall",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe",
        response: [],
        // marker: indicate(float(xp.get_xpand("wqi", "data")), "color")"marker",
        // text: indicate(float(xp.get_xpand("wqi", "data")), "text")"text"
      },
      // {
      //   lat: null,
      //   lon: null,
      //   name: "5G Ericsson KL",
      //   type: "scattermapbox",
      //   mode: "markers",
      //   state: "",
      //   response: []
      //   // marker: indicate(float(xp.get_xpand("wqi", "data")), "color")"marker",
      //   // text: indicate(float(xp.get_xpand("wqi", "data")), "text")"text"
      // },
      {
        lat: 1.555145,
        lon: 103.63764,
        name: "UTM JB Lake",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe",
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
      {
        lat: 1.460468,
        lon: 103.940487,
        name: "Sungai Kim Kim",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe",
        // marker: indicate(0, "color")"marker",
        // text: indicate(0, "text")"text"
      },
      {
        lat: 3.828111,
        lon: 103.265507,
        name: "Sungai Tiram",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe",
        // marker: indicate(30, "color")"marker",
        // text: indicate(30, "text")"text"
      },
      {
        lat: 2.892086,
        lon: 101.68903,
        name: "Sungai Langat",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe",
        // marker: indicate(30, "color")"marker",
        // text: indicate(30, "text")"text"
      },
      {
        lat: 3.496129,
        lon: 102.912493,
        name: "Sungai Pahang",
        type: "scattermapbox",
        mode: "markers",
        state: "Extremely Polluted",
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
      {
        lat: 2.235268,
        lon: 102.256568,
        name: "Sungai Malacca",
        type: "scattermapbox",
        mode: "markers",
        state: "Polluted",
        // marker: indicate(0, "color")"marker",
        // text: indicate(0, "text")"text"
      },
      {
        lat: 4.370342,
        lon: 101.072384,
        name: "Sungai Kinta",
        type: "scattermapbox",
        mode: "markers",
        state: "Polluted",
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
      {
        lat: 1.499313,
        lon: 103.685027,
        name: "Sungai Skudai",
        type: "scattermapbox",
        mode: "markers",
        state: "Polluted",
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
    ],
  });
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [safeCount, setSafeCount] = useState(0);
  const [pollutedCount, setPollutedCount] = useState(0);
  const [extremelyPollutedCount, setExtremelyPollutedCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const abortController = new AbortController();
  const signal = abortController.signal;
  const [map, setMap] = useState();
  const [side, setSide] = useState();
  // function get_xpand(parameter, mode) {
  //   // console.log(xpandUrl.proxy + xpandUrl.xpandAuth);
  //   fetch(xpandUrl.proxy + xpandUrl.xpandAuth, {
  //     headers: {
  //       "X-Secret": xpandUrl.xSecret,
  //       "Content-Type": "application/json"
  //     },
  //     signal: signal
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       xpandGetJWT(result.access_token, parameter, mode);
  //     });
  // }

  // function xpandGetJWT(accessToken, parameter, mode, data) {
  //   fetch(xpandUrl.proxy + xpandUrl.jwt, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer" + " " + accessToken
  //     },
  //     body: JSON.stringify({
  //       username: xpandUrl.userName,
  //       password: xpandUrl.password
  //     }),
  //     signal: signal
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       xpandGetData(result["X-IoT-JWT"], accessToken, parameter, data);
  //     });
  // }

  // function xpandGetData(jwt, accessToken, parameter, data) {
  //   var baseURL = xpandUrl.proxy + xpandUrl.getData;
  //   var eventName = xpandUrl.paramsDto.eventName;
  //   var deviceIds = xpandUrl.paramsDto.deviceIDs;
  //   var noOfEvents = xpandUrl.paramsDto.noOfEvents;
  //   var zoneId = xpandUrl.paramsDto.zoneId;
  //   var eventParams = xpandUrl.paramsDto.eventParam;

  //   fetch(
  //     baseURL +
  //       "eventName=" +
  //       eventName +
  //       "&deviceIds=" +
  //       deviceIds +
  //       "&noOfEvents=" +
  //       noOfEvents +
  //       "&zoneId=" +
  //       zoneId +
  //       "&eventParams=" +
  //       eventParams,
  //     {
  //       headers: {
  //         Authorization: "Bearer" + " " + accessToken,
  //         "X-IoT-JWT": jwt
  //       },
  //       signal: signal
  //     }
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       // console.log("result11: ", result);
  //       setResponse(result[deviceIds]);
  //       setIsLoading(false);
  //       let temp = location;
  //       temp.location.forEach(element => {
  //         if (element.name === "5G Ericsson KL KL") {
  //           element.state =
  //             result[deviceIds][0]["wqi"] >= 40
  //               ? "Safe"
  //               : result[deviceIds][0]["wqi"] >= 30
  //               ? "Polluted"
  //               : "Extremely Polluted";
  //         }
  //       });
  //       setLocation(temp);
  //       let safeCountTemp = 0,
  //         pollutedCountTemp = 0,
  //         extremelyPollutedCountTemp = 0;

  //       location.location.forEach(element => {
  //         // console.log(element.name, element.state);
  //         element.state === "Safe"
  //           ? safeCountTemp++
  //           : element.state === "Polluted"
  //           ? pollutedCountTemp++
  //           : extremelyPollutedCountTemp++;
  //       });
  //       setSafeCount(safeCountTemp);
  //       setPollutedCount(pollutedCountTemp);
  //       setExtremelyPollutedCount(extremelyPollutedCountTemp);
  //       setLoading(false);

  //       fetch(
  //         baseURL +
  //           "eventName=" +
  //           xpandUrl.locationDto.eventName +
  //           "&deviceIds=" +
  //           xpandUrl.locationDto.deviceIDs +
  //           "&noOfEvents=" +
  //           xpandUrl.locationDto.noOfEvents +
  //           "&zoneId=" +
  //           xpandUrl.locationDto.zoneId +
  //           "&eventParams=" +
  //           xpandUrl.locationDto.eventParam,
  //         {
  //           headers: {
  //             Authorization: "Bearer" + " " + accessToken,
  //             "X-IoT-JWT": jwt
  //           },
  //           signal: signal
  //         }
  //       )
  //         .then(response => {
  //           return response.json();
  //         })
  //         .then(location => {
  //           // console.log("location", location);
  //         });
  //     });
  // }

  function createLayer() {
    let layer = [];
    let side = [];
    let color = "";
    location.location.forEach((element) => {
      // console.log(element.state);

      if (element.state === "Safe") {
        color = "green";
      } else if (element.state === "Polluted") {
        color = "yellow";
      } else {
        color = "red";
      }

      // console.log(color);
      // layer.push(<Layer />);
      layer.push(
        <Marker
          key={element.name}
          properties={{
            description: "<strong>" + element.name + "</strong>",
          }}
          coordinates={[element.lon, element.lat]}
          anchor="bottom"
          onClick={() => {
            props.handler(element.name);
          }}
          // // console.log("mouse click", mapWithEvt);
          // routeHistory.push("/monitor");

          onMouseEnter={(mapWithEvt) => {
            // console.log("mouse enter", mapWithEvt);

            setPopup({
              lat: element.lat,
              lon: element.lon,
              description: "<strong>" + element.name + "</strong>",
            });
          }}
          onMouseLeave={(mapWithEvt) => {
            // console.log("mouse leave", mapWithEvt);
            setPopup(false);
          }}
        >
          {/* <img src={markerUrl} /> */}
          {/* condition = {element.state === "Safe"}; */}

          <div
            id={element.name}
            style={{
              zIndex: 1000,
              width: 1 + "em",
              height: 1 + "em",
              backgroundColor: color,
              borderRadius: 50 + "%",
            }}
          ></div>
        </Marker>
        // )}
        // />
      );
    });
    // console.log("layer", layer);

    layer.forEach((element) => {
      // if (element.key === "JB Sutera Mall") // console.log("layerr", element);
    });

    return layer;
  }

  const createSide = () => {
    let side = [];
    let color = "";
    location.location.forEach((element, i) => {
      if (element.state === "Safe") {
        color = "green";
      } else if (element.state === "Polluted") {
        color = "yellow";
      } else {
        color = "red";
      }

      side.push(
        <div
          key={i}
          style={{
            display: "flex",
            fontSize: "0.5em",
            cursor: "pointer",
          }}
          onClick={() => {
            map.flyTo({ center: [element.lon, element.lat] });
            setPopup({
              lat: element.lat,
              lon: element.lon,
              description: "<strong>" + element.name + "</strong>",
            });
          }}
        >
          <div
            id={element.name}
            style={{
              width: 1 + "em",
              height: 1 + "em",
              backgroundColor: color,
              borderRadius: 50 + "%",
              transform: "translateY(25%)",
            }}
          ></div>
          <div>{element.name}</div>
        </div>
      );
    });
    return side;
  };
  let lookupInterval = "";
  // console.log("out homecomp1");

  if (prevProps != props) {
    // console.log("homecomp1", props);
    if (props.params !== undefined) {
      setParamValue(props.params.params);
    }
    prevProps = props;
  }

  useEffect(() => {
    // console.log("homecomp1");
    // get_xpand("init").then(result => {
    //   // console.log("result:", result);
    //   setLocValue(result.location);
    //   setParamValue(result.params);
    // });
    // setLoading(true);
    // lookupInterval = setInterval(() => {
    //   // console.log("out11", loading);
    //   if (!loading) {
    //     setLoading(false);
    //     get_xpand();
    //     // console.log("in111");
    //   }
    // }, 5000);
    // return function cleanup() {
    //   abortController.abort();
    //   clearInterval(lookupInterval);
    // };
  }, []);

  function setLocValue(location) {}

  function setParamValue(params) {
    // console.log("homecomp1 p", params);
    setResponse(params[xpandUrl.paramsDto.deviceIDs]);
    setIsLoading(false);
    let temp = location;
    temp.location.forEach((element) => {
      if (element.name === "Sungai Skudai") {
        if (element.lat === null) {
          // console.log("Sungai Skudai", props);
          element.lat = 3.172788;
          //            props.location[xpandUrl.paramsDto.deviceIDs][0].latitude;
          element.lon = 101.719556;
          //            props.location[xpandUrl.paramsDto.deviceIDs][0].longitude;
        }
        // console.log("Sungai Skudai", params);

        element.state =
          params[xpandUrl.paramsDto.deviceIDs][0][unit.wqi.key] >= 40
            ? "Safe"
            : params[xpandUrl.paramsDto.deviceIDs][0][unit.wqi.key] >= 30
            ? "Polluted"
            : "Extremely Polluted";
      }
    });
    setLocation(temp);
    let safeCountTemp = 0,
      pollutedCountTemp = 0,
      extremelyPollutedCountTemp = 0;

    location.location.forEach((element) => {
      // console.log(element.name, element.state);
      element.state === "Safe"
        ? safeCountTemp++
        : element.state === "Polluted"
        ? pollutedCountTemp++
        : extremelyPollutedCountTemp++;
    });
    setSafeCount(safeCountTemp);
    setPollutedCount(pollutedCountTemp);
    setExtremelyPollutedCount(extremelyPollutedCountTemp);
    setLoading(false);
  }

  const row = {
    display: "flex",
  };

  const column = {
    width: "33.33%",
  };

  const borderDiv = {
    border: "2px black solid",
    margin: "1vh 2.5vw",
  };

  const mapContainer = {
    // border: "5px blue solid",
    width: "100%",
    display: "-webkit-inline-box",
  };

  const title = {
    fontFamily: "Comic Sans MS",
    fontSize: "1em",
    textAlign: "left",
    paddingLeft: "1.5em",
  };

  return isLoading ? (
    <div>Loading Data...</div>
  ) : (
    <div>
      <h3 style={title}>
        Number of river spot according to the pollution level
      </h3>
      <div style={row}>
        <div style={column}>
          <TextBorder
            textColor="hsl(120,100%,20%)"
            borderColor="hsl(120,100%,50%)"
            text="SAFE"
            count={safeCount}
          />
        </div>
        <div style={column}>
          <TextBorder
            textColor="hsl(60,100%,20%)"
            borderColor="hsl(60,100%,50%)"
            text="POLLUTED"
            count={pollutedCount}
          />
        </div>
        <div style={column}>
          <TextBorder
            textColor="hsl(0,100%,20%)"
            borderColor="hsl(0,100%,50%)"
            text="EXTREMELY POLLUTED"
            count={extremelyPollutedCount}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={mapContainer}>
          <Map
            onStyleLoad={(map) => {
              setMap(map);
              // console.log("mappppp", map);
            }}
            zoom={zoom}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "65vh",
              width: "100vw",
              display: "table-cell",
            }}
            center={center}
            // onClick={(map, e) => // console.log("onClickMap!", e.lngLat)}
          >
            {popup ? (
              <Popup
                style={{ zIndex: "100" }}
                coordinates={[popup.lon, popup.lat]}
                offset={{
                  "bottom-left": [12, 0],
                  bottom: [0, -10],
                  "bottom-right": [-12, -38],
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: popup.description,
                  }}
                />
              </Popup>
            ) : (
              <div></div>
            )}
            {createLayer()}
          </Map>
        </div>
        <div
          style={{ height: "65vh", width: "20vw", backgroundColor: "white" }}
        >
          {createSide()}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
