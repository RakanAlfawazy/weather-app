// src/Weather.js
import React from 'react';

const Weather = ({ data }) => {
  if (!data || !data.sys || !data.main || !data.weather || !data.wind) {
    return <p>No weather data available</p>;
  }

  return (
    <div className="weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
