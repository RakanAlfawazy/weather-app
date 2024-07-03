// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    if (city.trim() === '') return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
