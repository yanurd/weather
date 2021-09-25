import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = (props) => {
  /* London search by default */
  const [search, setSearch] = useState(44418);
  const [weekForecast, setWeekForecast] = useState({});
  const [today, setToday] = useState({});
  const [week, setWeek] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /* woeid stands for Where on Earth Id */
  function WEATHER_API(woeid) {
    return `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;
  }

  useEffect(() => {
    setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(WEATHER_API(search));
        const data = await res.json();
        setToday(data.consolidated_weather[0]);
        data.consolidated_weather.shift();
        setWeekForecast(data);
        setWeek(data.consolidated_weather)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [search]);
  return (
    <WeatherContext.Provider
      value={{
        search,
        setSearch,
        weekForecast,
        setWeekForecast,
        today,
        setToday,
        week,
        setWeek,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
