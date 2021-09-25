import { useContext } from "react";
import { WeatherContext } from "../../Provider";

import { Location } from "../../Components/location";
import { TodayDate } from "../../Components/todayDate";
import { TodayImage } from "../../Components/todayImage";
import { TodayInfo } from "../../Components/todayInfo";

import "../../Css/Containers/main.css";
const Weather = () => {
  const { weekForecast, today } = useContext(WeatherContext);
  return (
    <>
      <section className="weather-short">
        <div className="weather-short_img">
          <TodayImage
            status={today.weather_state_name}
            abbreviation={today.weather_state_abbr}
          />
        </div>
        <TodayInfo
          weatherStatus={today.weather_state_name}
          temp={today.the_temp}
        />
        <TodayDate />
        <Location title={weekForecast.title} />
      </section>
    </>
  );
};

export { Weather };
