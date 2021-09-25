import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayHumidityStatus = () => {
  const { today } = useContext(WeatherContext);

  return (
    <div className="weather-card_item">
      <span>Humidity</span>
      <h2>
        {today.humidity}
        <span className="weather-item_subtitle">%</span>
      </h2>
      <input type="range" value={today.humidity} disabled={true} />
    </div>
  );
};
export { TodayHumidityStatus };
