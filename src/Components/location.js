import "../Css/Components/location.css";
import { useContext } from "react";
import { WeatherContext } from "../Provider";
const Location = () => {
  const {weekForecast} = useContext(WeatherContext)
  const {title} = weekForecast
  return (
  <div className="weather-short_location">
    <h2>{title}</h2>
  </div>
)};
export { Location };
