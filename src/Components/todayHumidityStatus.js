import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayHumidityStatus = () => {
  const { weekForecast } = useContext(WeatherContext);
  const humidity = weekForecast.consolidated_weather[0]?.humidity || 0;
  return (
    <div className="weather-card_item">
      <span>Humidity</span>
      <h2>
        {humidity}
        <span className="weather-item_subtitle">%</span>
      </h2>
      <input type="range" value={humidity} disabled={true} />
    </div>
  );
};
export { TodayHumidityStatus };
