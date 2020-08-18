import { xpandUrl } from "./variable";

export async function get_xpand(mode) {
  console.log(xpandUrl.proxy + xpandUrl.xpandAuth);
  return await fetch(xpandUrl.proxy + xpandUrl.xpandAuth, {
    headers: {
      "X-Secret": xpandUrl.xSecret,
      "Content-Type": "application/json",
    },
    // signal: signal
  })
    .then((response) => response.json())
    .then((result) => {
      return xpandGetJWT(result.access_token, mode).then((x) => {
        return x;
      });
    });
}

async function xpandGetJWT(accessToken, mode) {
  return await fetch(xpandUrl.proxy + xpandUrl.jwt, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + accessToken,
    },
    body: JSON.stringify({
      username: xpandUrl.userName,
      password: xpandUrl.password,
    }),
    // signal: signal
  })
    .then((response) => response.json())
    .then((result) => {
      return xpandGetData(result["X-IoT-JWT"], accessToken, mode).then((x) => {
        return x;
      });
    });
}

async function xpandGetData(jwt, accessToken, mode) {
  var baseURL = xpandUrl.proxy + xpandUrl.getData;
  var eventName = xpandUrl.paramsDto.eventName;
  var deviceIds = xpandUrl.paramsDto.deviceIDs;
  var noOfEvents = xpandUrl.paramsDto.noOfEvents;
  var zoneId = xpandUrl.paramsDto.zoneId;
  var eventParams = xpandUrl.paramsDto.eventParam;
  var startDate = xpandUrl.paramsDto.startDate;
  var today = new Date();
  var endDate =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "%20" +
    today.getHours() +
    "%3A" +
    today.getMinutes() +
    "%3A" +
    today.getSeconds();

  return await fetch(
    baseURL +
      "eventName=" +
      eventName +
      "&deviceIds=" +
      deviceIds +
      "&startDate=" +
      startDate +
      "&endDate=" +
      endDate +
      "&zoneId=" +
      zoneId +
      "&eventParams=" +
      eventParams,
    {
      headers: {
        Authorization: "Bearer" + " " + accessToken,
        "X-IoT-JWT": jwt,
      },
      //   signal: signal
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      var finalResult;
      //   setResponse(result[deviceIds]);
      //   setIsLoading(false);
      //   let temp = location;
      //   temp.location.forEach(element => {
      //     if (element.name === "5G Ericsson KL") {
      //       element.state =
      //         result[deviceIds][0]["wqi"] >= 40
      //           ? "Safe"
      //           : result[deviceIds][0]["wqi"] >= 30
      //           ? "Polluted"
      //           : "Extremely Polluted";
      //     }
      //   });
      //   setLocation(temp);
      //   let safeCountTemp = 0,
      //     pollutedCountTemp = 0,
      //     extremelyPollutedCountTemp = 0;

      //   location.location.forEach(element => {
      //     console.log(element.name, element.state);
      //     element.state === "Safe"
      //       ? safeCountTemp++
      //       : element.state === "Polluted"
      //       ? pollutedCountTemp++
      //       : extremelyPollutedCountTemp++;
      //   });
      //   setSafeCount(safeCountTemp);
      //   setPollutedCount(pollutedCountTemp);
      //   setExtremelyPollutedCount(extremelyPollutedCountTemp);
      //   setLoading(false);
      console.log("resultt", result);

      finalResult = {
        params: result,
      };
      if (mode === "init") {
        return getLocation(accessToken, jwt).then((locationFetch) => {
          finalResult.location = locationFetch;
          return finalResult;
        });
      }
      console.log("return lo");
      return finalResult;
    });
}

async function getLocation(accessToken, jwt) {
  var baseURL = xpandUrl.proxy + xpandUrl.getData;
  return await fetch(
    baseURL +
      "eventName=" +
      xpandUrl.locationDto.eventName +
      "&deviceIds=" +
      xpandUrl.locationDto.deviceIDs +
      "&noOfEvents=" +
      xpandUrl.locationDto.noOfEvents +
      "&zoneId=" +
      xpandUrl.locationDto.zoneId +
      "&eventParams=" +
      xpandUrl.locationDto.eventParam,
    {
      headers: {
        Authorization: "Bearer" + " " + accessToken,
        "X-IoT-JWT": jwt,
      },
      // signal: signal
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((location) => {
      return location;
    });
}
