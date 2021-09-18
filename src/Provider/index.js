import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = (props) => {
  /* London search by default */
  const [search, setSearch] = useState(44418);
  const [weekForecast, setWeekForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /* woeid stands for Where on Earth Id */
  function WEATHER_API(woeid) {
    return `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        setLoading(true);
        fetch(WEATHER_API(search))
          .then((res) => res.json())
          .then((data) => {
            setWeekForecast(data);
          });
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
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
