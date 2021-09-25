
import '../../Css/Containers/todayDetails.css'
import { TodayAirPressureStatus } from "../../Components/todayAirPressureStatus";
import { TodayWindStatus } from "../../Components/todayWindStatus";
import { TodayHumidityStatus } from "../../Components/todayHumidityStatus";
import { TodayVisibilityStatus } from "../../Components/todayVisibilityStatus";
const TodayDetails = () => {

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
