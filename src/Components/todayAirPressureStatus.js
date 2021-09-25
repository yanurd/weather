import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayAirPressureStatus = () => {
  const { today } = useContext(WeatherContext);

  return (
    <div className="weather-card_item">
      <span>Air Pressure</span>
      <h2>
        {today.air_pressure}
        <span className="weather-item_subtitle">mb</span>
      </h2>
    </div>
  );
};
export { TodayAirPressureStatus };
