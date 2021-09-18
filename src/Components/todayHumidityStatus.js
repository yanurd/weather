import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayHumidityStatus = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;
  return (
    <div className="weather-card_item">
      <span>Humidity</span>
      <h2>
        {consolidated_weather[0].humidity}
        <span className="weather-item_subtitle">%</span>
      </h2>
      <input
        type="range"
        value={consolidated_weather[0].humidity}
        disabled={true}
      />
    </div>
  );
};
export { TodayHumidityStatus };
