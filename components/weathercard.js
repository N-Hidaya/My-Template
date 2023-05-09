import React from 'react';
import './stylesheets/weather.module.css';
import { Card } from 'semantic-ui-react'

const WeatherCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Feels Like: {weatherData.main.feels_like}</p>
        <p>Humidity: {weatherData.main.humidity}</p>
        <p>Country: {weatherData.sys.country}</p>
        <p>Description: {weatherData.weather[0].description}</p>
    </Card.Content>
  </Card>
)

export default WeatherCard;