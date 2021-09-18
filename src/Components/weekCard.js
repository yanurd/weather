import { TodayImage } from "./todayImage";

import '../Css/Components/weekCard.css'
const WeekCard = () => (
  <div className="weather-week_card">
    <h2>Tomorrow</h2>
    <TodayImage abbreviation="c" status="cloudy"/>
    <div className="weather-temp">
      <p className="weather-temp_max">23</p>
      <p className="weather-temp_min">21</p>
    </div>
  </div>
);

export { WeekCard };
