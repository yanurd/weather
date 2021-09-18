import { useState } from "react";

import { WeekCard } from "../../Components/weekCard";
import '../../Css/Containers/weekForecast.css'
const WeekForecast = () => {
  /* State used to pop 1st element from weekForecast */
  const [week, setWeek] = useState([]);
  return (
    
    <div className="weather-full_week">
      <WeekCard />
    </div>
  );
};

export { WeekForecast };
