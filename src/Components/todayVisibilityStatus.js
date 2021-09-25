import { useContext } from "react";
import { WeatherContext } from "../Provider";

const TodayVisibilityStatus = () => {
  const { today } = useContext(WeatherContext);

  /* Formats to a number with only one decimal */
  const formatedNumber = (number) => {
    return (Math.round(number * 100) / 100).toFixed(1);
  };

  return (
    <div className="weather-card_item">
      <span>Visibility</span>
      <h2>
        {formatedNumber(today.visibility)}
        <span className="weather-item_subtitle">miles</span>
      </h2>
    </div>
  );
};

export { TodayVisibilityStatus };
