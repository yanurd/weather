import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayWindStatus = () => {
  const { weekForecast } = useContext(WeatherContext);

  /* Formats Number to one decimal */
  return (
    <div className="weather-card_item">
      <span>Wind status</span>
      <h2>
        {Math.round(weekForecast.consolidated_weather[0]?.wind_speed * 100) /
          100 }
        <span className="weather-item_subtitle">mph</span>
      </h2>
      <span>
        {weekForecast.consolidated_weather[0]?.wind_direction_compass }
      </span>
    </div>
  );
};
export { TodayWindStatus };
