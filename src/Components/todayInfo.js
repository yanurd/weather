import "../Css/Components/todayInfo.css";

const TodayInfo = ({temp, weatherStatus}) => {
  return (
    <div className="weather-short_info">
      <h1>
        {Math.floor(temp)}
        <span className="weather-short_temp">°c</span>
      </h1>
      <h2>{weatherStatus}</h2>
    </div>
  );
};

export { TodayInfo };
