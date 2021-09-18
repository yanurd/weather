import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayAirPressureStatus = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;
  return (
    <div className="weather-card_item">
      <span>Air Pressure</span>
      <h2>
        {consolidated_weather[0].air_pressure}{" "}
        <span className="weather-item_subtitle">mb</span>
      </h2>
    </div>
  );
};
export { TodayAirPressureStatus };
