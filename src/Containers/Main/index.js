import { useContext } from "react";
import { WeatherContext } from "../../Provider";

import { Location } from "../../Components/location";
import { TodayDate } from "../../Components/todayDate";
import { TodayImage } from "../../Components/todayImage";
import { TodayInfo } from "../../Components/todayInfo";

import "../../Css/Containers/main.css";
const Weather = () => {
  const { weekForecast } = useContext(WeatherContext);
  const { consolidated_weather } = weekForecast;
  return (
    <>
      <section className="weather-short">
        <div className="weather-short_img">
          <TodayImage
            status="c"
            abbreviation="c"
          />
        </div>
        <TodayInfo />
        <TodayDate />
        <Location />
      </section>
    </>
  );
};

export { Weather };
