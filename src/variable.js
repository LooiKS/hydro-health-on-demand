export const location = [
  {
    lat: 1.5177,
    lon: 103.6715,
    name: "JB Sutera Mall",
  },
  {
    lat: 3.172788,
    lon: 101.719556,
    name: "5G Ericsson KL",
  },
  {
    lat: 1.555145,
    lon: 103.63764,
    name: "UTM JB Lake",
  },
  {
    lat: 1.460468,
    lon: 103.940487,
    name: "Sungai Kim Kim",
  },
  {
    lat: 3.828111,
    lon: 103.265507,
    name: "Sungai Tiram",
  },
  {
    lat: 2.892086,
    lon: 101.68903,
    name: "Sungai Langat",
  },
  {
    lat: 3.496129,
    lon: 102.912493,
    name: "Sungai Pahang",
  },
  {
    lat: 2.235268,
    lon: 102.256568,
    name: "Sungai Malacca",
  },
  {
    lat: 4.370342,
    lon: 101.072384,
    name: "Sungai Kinta",
  },
  {
    lat: 1.499313,
    lon: 103.685027,
    name: "Sungai Skudai",
  },
];

export const unit = {
  conductivity: {
    key: "electrical_conductivity",
    unit: "μS",
    title: "Electrical Conductivity",
  },
  oxygen: {
    key: "dissolve_oxygen",
    unit: "mg/L",
    title: "Oxygen",
  },
  tds: {
    key: "total_dissolved_solid",
    unit: "mg/L",
    title: "Total Dissolved Solid",
  },
  turbidity: {
    key: "turbidity",
    unit: "NTU",
    title: "Turbidity",
  },
  ph: {
    key: "pH",
    unit: "",
    title: "pH",
  },
  temperature: {
    key: "temperature",
    unit: "℃",
    title: "Temperature",
  },
  ammonium: {
    key: "ammonium",
    unit: "mg/L",
    title: "Ammonium",
  },
  wqi: {
    key: "water_quality_index",
    unit: "",
    title: "Water Quality Index",
  },
};

export const xpandUrl = {
  proxy: "", //"http://localhost:8083/",
  xpandAuth: "https://iot.xpand.asia/developer/api/applicationmgt/authenticate",
  xSecret:
    "ZWR6QWltM2t5dHd4ZVNNcXYxYlpxa0hhcXpjYTpxN3hEdHBhd0NVTzk2a3VZcjdOMWlxXzkyYndh",
  jwt: "https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",
  userName: "hydrohealthondemand@gmail.com",
  password: "teamh2o",
  getData:
    "https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?",
  paramsDto: {
    eventName: "WaterQuality",
    // deviceIDs: "20717",
    deviceIDs: "27432",
    noOfEvents: "10",
    zoneId: "Asia%2FKuala_Lumpur",
    eventParam:
      "temperature%2Cdissolve_oxygen%2CpH%2Cammonium%2Celectrical_conductivity%2Ctotal_dissolved_solid%2Cwater_quality_index%2Ctime",
    startDate: "2019-11-20%2000%3A00%3A00",
    endDate: "yyyy-MM-dd%20HH%3AMM%3ASS",
  },
  locationDto: {
    eventName: "DeviceSense",
    // deviceIDs: "20717",
    deviceIDs: "27432",
    noOfEvents: "1",
    zoneId: "Asia%2FKuala_Lumpur",
    eventParam: "latitude, longitude",
  },
};
