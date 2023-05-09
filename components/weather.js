import 'semantic-ui-css/semantic.min.css'
import './stylesheets/weather.module.css';
import React, { useEffect, useState } from "react";
import WeatherCard from './weathercard';


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
    <div className="Weather">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </div>
  );
}