import React, { useState } from "react";
import axios from "axios";
//import "./styles.css";

export default function SearchCity(props) {
  let [city, setCity] = useState(null);
  let [text, setText] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setText(`In ${city}`);

    let units = `metric`;
    let apiKey = `5ea730885f68830cc2b0192e166ddea8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter city"
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <h4>{text}</h4>
      <div id="icon">
        <img src={icon} alt={description} />
      </div>

      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
      </ul>
    </div>
  );
}
