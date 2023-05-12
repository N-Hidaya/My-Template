import React from 'react';
import moment from 'moment';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const WeatherCard = ({weatherData}) => (
  
  <Box boxShadow='2xl' p='20px' borderRadius='15px'>
    <Box alignItems='center'>
        <Heading color='whiteAlpha.900'>{weatherData.name}</Heading>
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
        
    </Box>
  </Box>

)

export default WeatherCard;