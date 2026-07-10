import './App.css'
import {useState, useEffect} from 'react';
const APIKeyName = "feb4a8834eabc6736fb50829506502ad";
const url = `http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone`;

function App() {
  const [location, setLocation] = useState (null);
  const [weather, setWeather] = useState (null);
  const [loading, setIsLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (()=>{
    async function getData (){
      try{
      setIsLoading(true);
      const response = await fetch(url);
      if(!response.ok){throw new Error ('NetWork Error!!!');}
      const data = await response.json();
      setLocation (data);

      const {lat, lon} = data;
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKeyName}&units=metric`;
      const weatherRes = await fetch(url2);
      if(!weatherRes.ok){throw new Error ('Weather Data Error!!!')}
      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      }catch(error){
        setError(error.message);

      }finally{
        setIsLoading(false);
      }
    }
    getData();
  }, [])


  return (
    <>
      <h2>Weather Dashboard</h2>
      <div className="search">
        <input type="text" />
        <button className="searchBtn">Search</button>
      </div>
      <div className="weatherData">
        {(loading)?
        (<p>"Loading ..."</p>): error?
        (<p style={{color: 'red'}}>{error}</p>):
        (location && weather &&
        <div>
          <p>Your City: {location.city}</p>
          <p>Temp: {weather.main?.temp} °C</p>
        </div>
        )}
      </div>
    </>
  )
}

export default App
