import React, { useEffect, useState } from "react";
import WeatherCard from './weathercard';
import { Box } from "@chakra-ui/react";


export default function Weather() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.NEXT_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NEXT_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <Box as='div' boxShadow='2xl' width='400px'>
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </Box>
  );
}