import { useContext } from "react";
import { WeatherContext } from "../Provider/index";

import { Header } from "../Containers/Header";
import { Weather } from "../Containers/Main";
import { WeekForecast } from "../Containers/WeekForecast";
import { TodayDetails } from "../Containers/TodayDetails";

import "./App.css";
const AppUi = () => {
  const { loading, error } = useContext(WeatherContext);
  return (
    <>
      {loading === false && error === false &&(
        <>
          <Header />
          <Weather />
          <section className="weather-full">
            <WeekForecast />
            <TodayDetails />
          </section>
        </>
      )}
    </>
  );
};

export { AppUi };
