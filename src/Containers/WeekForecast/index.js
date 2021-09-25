import { useContext } from "react";

import { WeekCard } from "../../Components/weekCard";
import "../../Css/Containers/weekForecast.css";
import { WeatherContext } from "../../Provider";
const WeekForecast = () => {
  const { week } = useContext(WeatherContext);
  return (
    <div className="weather-full_week">
      {week.map((day) => (
        <WeekCard
          key={day.id}
          abbreviation={day.weather_state_abbr}
          status={day.weather_state_name}
          minTemp={day.min_temp}
          maxTemp={day.max_temp}
        />
      ))}
    </div>
  );
};

export { WeekForecast };
