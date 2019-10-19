import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from "react-router-dom";

// ES6
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from "react-mapbox-gl";

// ES5
// var ReactMapboxGl = require('react-mapbox-gl');
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibG9vaWtpYW5zZW5nIiwiYSI6ImNqdWF3MzFrMzA2bmYzeXBkMGdkMTdsM2sifQ.SMkjjzrxv1Gwmf127YmGpA"
});

const markerUrl = "logo.svg";

class Home extends Component {
  state = {
    location: [
      {
        lat: 3.172788,
        lon: 101.719556,
        name: "5G Ericsson KL",
        type: "scattermapbox",
        mode: "markers",
        state: "",
        response: []
        // marker: indicate(float(xp.get_xpand("wqi", "data")), "color")"marker",
        // text: indicate(float(xp.get_xpand("wqi", "data")), "text")"text"
      },
      {
        lat: 1.555145,
        lon: 103.63764,
        name: "UTM JB Lake",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe"
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
      {
        lat: 1.460468,
        lon: 103.940487,
        name: "Sungai Kim Kim",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe"
        // marker: indicate(0, "color")"marker",
        // text: indicate(0, "text")"text"
      },
      {
        lat: 3.828111,
        lon: 103.265507,
        name: "Sungai Tiram",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe"
        // marker: indicate(30, "color")"marker",
        // text: indicate(30, "text")"text"
      },
      {
        lat: 2.892086,
        lon: 101.68903,
        name: "Sungai Langat",
        type: "scattermapbox",
        mode: "markers",
        state: "Safe"
        // marker: indicate(30, "color")"marker",
        // text: indicate(30, "text")"text"
      },
      {
        lat: 3.496129,
        lon: 102.912493,
        name: "Sungai Pahang",
        type: "scattermapbox",
        mode: "markers",
        state: "Extremely Polluted"
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      },
      {
        lat: 2.235268,
        lon: 102.256568,
        name: "Sungai Malacca",
        type: "scattermapbox",
        mode: "markers",
        state: "Polluted"
        // marker: indicate(0, "color")"marker",
        // text: indicate(0, "text")"text"
      },
      {
        lat: 4.370342,
        lon: 101.072384,
        name: "Sungai Kinta",
        type: "scattermapbox",
        mode: "markers",
        state: "Polluted"
        // marker: indicate(40, "color")"marker",
        // text: indicate(40, "text")"text"
      }
    ],
    gotPopUp: false,
    popupText: "",
    response: [],
    isLoading: true
  };

  componentWillMount() {
    this.get_xpand();
  }

  createLayer = () => {
    let routeHistory = useHistory();

    let layer = [];
    let color = "";
    this.state.location.forEach(element => {
      console.log(element.state);

      if (element.state === "Safe") {
        color = "blue";
      } else if (element.state === "Polluted") {
        color = "green";
      } else {
        color = "red";
      }

      console.log(color);
      layer.push(
        // <Feature
        //   coordinates={[element.lon, element.lat]}
        //   properties={{
        //     description: "<strong>" + element.name + "</strong>"
        //   }}
        //   onClick={() => console.log(this)}
        //   onMouseEnter={mapWithEvt => {
        //     console.log(
        //       "mouse enter",
        //       mapWithEvt.feature.properties.description
        //     );
        //     this.setState({
        //       gotPopUp: {
        //         lat: element.lat,
        //         lon: element.lon,
        //         description: mapWithEvt.feature.properties.description
        //       },
        //       popupText: mapWithEvt.feature.properties.properties
        //     });
        //   }}
        //   onMouseLeave={mapWithEvt => {
        //     console.log("mouse leave", mapWithEvt);
        //     this.setState({
        //       gotPopUp: false
        //     });
        //   }}
        // />
        // <Route
        //   key={element.name}
        //   render={({ history }) => (
        <Marker
          properties={{
            description: "<strong>" + element.name + "</strong>"
          }}
          coordinates={[element.lon, element.lat]}
          anchor="bottom"
          onClick={mapWithEvt => {
            console.log("mouse click", mapWithEvt);
            // routeHistory.push("/monitor");
          }}
          onMouseEnter={mapWithEvt => {
            console.log("mouse enter", mapWithEvt);
            this.setState({
              gotPopUp: {
                lat: element.lat,
                lon: element.lon,
                description: "<strong>" + element.name + "</strong>"
              }
            });
          }}
          onMouseLeave={mapWithEvt => {
            console.log("mouse leave", mapWithEvt);
            this.setState({
              gotPopUp: false
            });
          }}
        >
          {/* <img src={markerUrl} /> */}
          {/* condition = {element.state === "Safe"}; */}

          <div
            style={{
              width: 1 + "em",
              height: 1 + "em",
              backgroundColor: color,

              borderRadius: 50 + "%"
            }}
          >
            {color}
          </div>
        </Marker>
        // )}
        // />
      );
    });
    console.log(layer);
    return layer;
  };

  render() {
    return (
      <div>
        <h2>HOME</h2>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          center={{ lat: 3.172788, lng: 101.719556 }}
          onClick={(map, e) => console.log("onClickMap!", e.lngLat)}
        >
          {/* <Layer type="symbol" layout={{ "icon-image": "circle-15" }}></Layer> */}
          {this.state.gotPopUp ? (
            <Popup
              coordinates={[this.state.gotPopUp.lon, this.state.gotPopUp.lat]}
              offset={{
                "bottom-left": [12, 0],
                bottom: [0, -10],
                "bottom-right": [-12, -38]
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.gotPopUp.description
                }}
              />
            </Popup>
          ) : (
            <div></div>
          )}
          {this.createLayer()}

          {/* <Layer
            // key={element.name}
            type="symbol"
            id="marker"
            layout={{ "icon-image": "circle-15" }}
          >
            {this.createLayer()}
          </Layer>
          <Layer
            // key={element.name}
            type="symbol"
            id="marker"
            layout={{ "icon-image": "aquarium-15" }}
          >
            <Feature coordinates={[102, 5]} />
          </Layer> */}
        </Map>
      </div>
    );
  }

  get_xpand(parameter, mode) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/applicationmgt/authenticate",
      {
        headers: {
          "X-Secret":
            "UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(result => {
        this.xpandGetJWT(result.access_token, parameter, mode);
      });
  }

  xpandGetJWT(accessToken, parameter, mode, data) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",
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
        })
      }
    )
      .then(response => response.json())
      .then(result => {
        this.xpandGetData(result["X-IoT-JWT"], accessToken, parameter, data);
      });
  }

  xpandGetData(jwt, accessToken, parameter, data) {
    var baseURL =
      "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?";
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
        }
      }
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        console.log("result: ", result[deviceIds]);
        this.setState({
          response: result[deviceIds],
          isLoading: false
        });
      });
  }
}

export default Home;
