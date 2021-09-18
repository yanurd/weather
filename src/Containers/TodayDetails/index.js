import { useContext } from "react";
import '../../Css/Containers/todayDetails.css'
import { WeatherContext } from "../../Provider";
import { TodayAirPressureStatus } from "../../Components/todayAirPressureStatus";
import { TodayWindStatus } from "../../Components/todayWindStatus";
import { TodayHumidityStatus } from "../../Components/todayHumidityStatus";
import { TodayVisibilityStatus } from "../../Components/todayVisibilityStatus";
const TodayDetails = () => {
  const { weekForecast } = useContext(WeatherContext);
  /*   const {
    wind_speed,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure,
  } = weekForecast.consolidated_weather[0]; */
  return (
    <div className="weather-full_details">
      <h2>Today's Highlights</h2>
      <div className="weather-details_card">
        <TodayWindStatus />
        <TodayHumidityStatus />
        <TodayVisibilityStatus />
        <TodayAirPressureStatus />
      </div>
    </div>
  );
};
export { TodayDetails };
