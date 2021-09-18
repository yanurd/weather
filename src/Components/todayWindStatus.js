import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayWindStatus = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;
  /* Formats Number to one decimal */
  const windSpeed = (
    Math.round(consolidated_weather[0].wind_speed * 100) / 100
  ).toFixed(1);
  const windDirectionCompass = consolidated_weather[0].wind_direction_compass;
  return (
    <div className="weather-card_item">
      <span>Wind status</span>
      <h2>
        {windSpeed} <span className="weather-item_subtitle">mph</span>
      </h2>
      <span>{windDirectionCompass}</span>
    </div>
  );
};
export { TodayWindStatus };
