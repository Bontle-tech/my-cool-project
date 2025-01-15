function displayTemperature(response) {
  let tempElement = document.querySelector("#city-temp");
  let temperature = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;

  let city = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInfo = document.querySelector("#search-input-info");
  let city = searchInfo.value;
  let apiKey = "4a3ob4aa80151eaf07bb532fe635b4t2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formattedDay = days[day];
currentDate.innerHTML = `${formattedDay} ${hours}:${minutes},`;
