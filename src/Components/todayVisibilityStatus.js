import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayVisibilityStatus = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;

  /* Formats to a number with only one decimal */
  const formatedNumber = (
    Math.round(consolidated_weather[0].visibility * 100) / 100
  ).toFixed(1);

  return (
    <div className="weather-card_item">
      <span>Visibility</span>
      <h2>
        {formatedNumber}
        <span className="weather-item_subtitle">miles</span>
      </h2>
    </div>
  );
};

export { TodayVisibilityStatus };
