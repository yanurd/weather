import "../Css/Components/todayDate.css";
import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayDate = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { time } = weekForecast;
  return (
    <div className="weather-short_date">
      <span className="weather_date-today"> Today </span>
      <span className="weather_date-marker">•</span>
      <span className="weather_date-date">day</span>
    </div>
  );
};

export { TodayDate };
