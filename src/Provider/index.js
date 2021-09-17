import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();
const WEATHER_API = "https://www.metaweather.com/api/location/44418/";
const WeatherProvider = (props) => {
  const [weekForecast, setWeekForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(WEATHER_API)
        .then((response) => response.json())
        .then((data) => setWeekForecast(data))
        .catch(error=> setError(true))
    }, 1000);
  }, [weekForecast]);
  return (
    <WeatherContext.Provider
      value={{
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

export { WeatherProvider };
