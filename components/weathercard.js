import React from 'react';
import s from './stylesheets/weather.module.css';
import { Card, CardDescription } from 'semantic-ui-react'
import moment from 'moment';
import Image from 'next/image';

const WeatherCard = ({weatherData}) => (
  
  <div className={s.main}>
    <Card.Content >
        <Card.Header className={s.header}>{weatherData.name}</Card.Header>
        <div>
            <p className={s.day}>{moment().format('dddd')} | {moment().format('LL')}</p>
        </div>
        <CardDescription className={s.temp}>
        <Image  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              width={100}
              height={100}
              alt="Picture of the weather"/>
          <p >Temperature: {weatherData.main.temp}&deg;C</p>
          <p >Feels Like: {weatherData.main.feels_like}&deg;C</p>
          <p className={s.fr}>Humidity: {weatherData.main.humidity}%</p>
          <p className={s.fr}>Country: {weatherData.sys.country}</p>
          <p className={s.fr}>Description: {weatherData.weather[0].description}</p>
        </CardDescription>
        
        
        
    </Card.Content>
  </div>
)

export default WeatherCard;