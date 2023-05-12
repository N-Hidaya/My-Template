import React from 'react';
import s from './stylesheets/weather.module.css';
import moment from 'moment';
import { Box, Card, CardBody, Heading, Text, Image } from '@chakra-ui/react';

const WeatherCard = ({weatherData}) => (
  
  <Card boxShadow='2xl'>
    <CardBody alignItems='center'>
        <Heading>{weatherData.name}</Heading>
        <Box as='div'>
            <Text>{moment().format('dddd')} | {moment().format('LL')}</Text>
        </Box>
        <Text>
        <Image  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
             boxSize='100px' alt='weatherIcon'/>
          <p >Temperature: {weatherData.main.temp}&deg;C</p>
          <p >Feels Like: {weatherData.main.feels_like}&deg;C</p>
          <p >Humidity: {weatherData.main.humidity}%</p>
          <p >Country: {weatherData.sys.country}</p>
          <p >Description: {weatherData.weather[0].description}</p>
        </Text>
        
    </CardBody>
  </Card>

)

export default WeatherCard;