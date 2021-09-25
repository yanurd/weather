import { TodayImage } from "./todayImage";

import "../Css/Components/weekCard.css";
const WeekCard = ({ minTemp, maxTemp, status, abbreviation }) => (
  <div className="weather-week_card">
    <h2>Tomorrow</h2>
    <TodayImage
      abbreviation={abbreviation}
      status={status}
    />
    <div className="weather-temp">
      <p className="weather-temp_max">{Math.floor(maxTemp)}°C</p>
      <p className="weather-temp_min">{Math.floor(minTemp)}°C</p>
    </div>
  </div>
);

export { WeekCard };
