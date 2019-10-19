// const express = require("express");
// const request = require("request");

// const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "x-requested-with, x-requested-by");
//   next();
// });

// app.get("/getData", (req, res) => {
//   request(
//     {
//       url: "https://iot.xpand.asia/developer/api/applicationmgt/authenticate",
//       headers: {
//         "X-Secret":
//           "UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh",
//         "Content-Type": "application/json"
//       }
//     },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: "error", message: error.message });
//       }
//       console.log("access_token", JSON.parse(body).access_token);
//       var accessToken = JSON.parse(body).access_token;
//       console.log(accessToken);
//       request(
//         {
//           url: "https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer" + " " + accessToken
//           },
//           body: JSON.stringify({
//             username: "utmgroup02@noreply.com",
//             password: "teamh2o"
//           })
//         },
//         (error, response, body) => {
//           if (error) {
//             return res
//               .status(500)
//               .json({ type: "error", message: error.message });
//           }
//           console.log(body);
//           var jwt = JSON.parse(body)["X-IoT-JWT"];
//           var baseURL =
//             "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?";
//           var eventName = "Try";
//           var deviceIds = "16492";
//           var noOfEvents = "7";
//           var zoneId = "Asia%2FKuala_Lumpur";
//           request(
//             {
//               url:
//                 baseURL +
//                 "eventName=" +
//                 eventName +
//                 "&deviceIds=" +
//                 deviceIds +
//                 "&noOfEvents=" +
//                 noOfEvents +
//                 "&zoneId=" +
//                 zoneId,

//               headers: {
//                 Authorization: "Bearer" + " " + accessToken,
//                 "X-IoT-JWT": jwt
//               }
//             },
//             (error, response, body) => {
//               if (error) {
//                 return res
//                   .status(500)
//                   .json({ type: "error", message: error.message });
//               }
//               console.log(body);
//               // res.statusCode(200).json()
//             }
//           );
//         }
//       );

//       //   res.json(JSON.parse(body));
//     }
//   );
// });

// // function get_xpand(parameter, mode) {
// //   fetch(
// //     "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/applicationmgt/authenticate",
// //     {
// //       headers: {
// //         "X-Secret":
// //           "UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh",
// //         "Content-Type": "application/json"
// //       },
// //       signal: signal
// //     }
// //   )
// //     .then(response => response.json())
// //     .then(result => {
// //       xpandGetJWT(result.access_token, parameter, mode);
// //     });
// // }

// // function xpandGetJWT(accessToken, parameter, mode, data) {
// //   fetch(
// //     "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",
// //     {
// //       method: "POST",
// //       headers: {
// //         Accept: "application/json",
// //         "Content-Type": "application/json",
// //         Authorization: "Bearer" + " " + accessToken
// //       },
// //       body: JSON.stringify({
// //         username: "utmgroup02@noreply.com",
// //         password: "teamh2o"
// //       }),
// //       signal: signal
// //     }
// //   )
// //     .then(response => response.json())
// //     .then(result => {
// //       xpandGetData(result["X-IoT-JWT"], accessToken, parameter, data);
// //     });
// // }

// // function xpandGetData(jwt, accessToken, parameter, data) {
// //   var baseURL =
// //     "https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?";
// //   var eventName = "Try";
// //   var deviceIds = "16492";
// //   var noOfEvents = "7";
// //   var zoneId = "Asia%2FKuala_Lumpur";
// //   // var startDate = '2018-08-09%2012%3A00%3A00'
// //   fetch(
// //     baseURL +
// //       "eventName=" +
// //       eventName +
// //       "&deviceIds=" +
// //       deviceIds +
// //       "&noOfEvents=" +
// //       noOfEvents +
// //       "&zoneId=" +
// //       zoneId,
// //     {
// //       headers: {
// //         Authorization: "Bearer" + " " + accessToken,
// //         "X-IoT-JWT": jwt
// //       },
// //       signal: signal
// //     }
// //   )
// //     .then(response => {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(result => {
// //       console.log("result: ", result[deviceIds][0]);
// //       setResponse(result[deviceIds]);
// //       setIsLoading(false);
// //       let temp = location;
// //       temp.location.forEach(element => {
// //         if (element.name === "5G Ericsson KL") {
// //           element.state =
// //             result[deviceIds][0]["wqi"] >= 40
// //               ? "Safe"
// //               : result[deviceIds][0]["wqi"] >= 30
// //               ? "Polluted"
// //               : "Extremely Polluted";
// //         }
// //       });
// //       setLocation(temp);
// //       let safeCountTemp = 0,
// //         pollutedCountTemp = 0,
// //         extremelyPollutedCountTemp = 0;

// //       location.location.forEach(element => {
// //         console.log(element.name, element.state);
// //         element.state === "Safe"
// //           ? safeCountTemp++
// //           : element.state === "Polluted"
// //           ? pollutedCountTemp++
// //           : extremelyPollutedCountTemp++;
// //       });
// //       setSafeCount(safeCountTemp);
// //       setPollutedCount(pollutedCountTemp);
// //       setExtremelyPollutedCount(extremelyPollutedCountTemp);
// //       setLoading(false);
// //     });
// // }

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(port, host, function() {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
