import '../Css/Components/todayInfo.css'
import { useContext } from "react";
import { WeatherContext } from "../Provider";
const TodayInfo = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;
  return (
    <div className="weather-short_info">
      <h1>
        {Math.floor(consolidated_weather[0].the_temp)}
        <span className="weather-short_temp">°c</span>
      </h1>
      <h2>{consolidated_weather[0].weather_state_name}</h2>
    </div>
  );
};

export { TodayInfo };
