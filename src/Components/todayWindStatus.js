import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayWindStatus = () => {
  const { today } = useContext(WeatherContext);

  /* Formats Number to one decimal */
  const formatNumber = (number) => {
    return Math.round(number * 100) / 100;
  };
  return (
    <div className="weather-card_item">
      <span>Wind status</span>
      <h2>
        {formatNumber(today.wind_speed)}
        <span className="weather-item_subtitle">mph</span>
      </h2>
      <span>{today.wind_direction_compass}</span>
    </div>
  );
};
export { TodayWindStatus };
