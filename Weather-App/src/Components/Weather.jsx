import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import AllIcons from "./AllIcons";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = <AllIcons />;

  //this search method consist of async method which will fetch the api from the given envirnoment (.env file)
  // and storing in the response variable it will give ajax format data se after that we are converting it into
  // json format by using .json() into data variable (it consist of object we can fetch all record by their keys)
  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
      return;
    }
    try {
      // weather api string in url variable in string format also we have change some points like appid, q, and before it will return the temperature in degree so we use (&units=metric) to convert it into celcious
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      // we are getting the response by fetching the api also we have use await to wait
      const response = await fetch(url);

      //converting response into json format
      const data = await response.json();
      console.log(data);
      const icons = allIcons[data.weather[0].icon] || clear_icon;

      //we are setting up the weather data
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icons,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching data", error.message);
    }
  };
  useEffect(() => {
    search("Gurgaon");
  }, []);
  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img
            src={search_icon}
            alt=""
            onClick={() => {
              search(inputRef.current.value);
            }}
          />
        </div>
        {weatherData ? (
          <>
            <img src={weatherData.icon} alt="" className="weather-icon" />
            <p className="temperature">{weatherData.temperature} &deg;C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Weather;
