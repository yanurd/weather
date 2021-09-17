const Weather = () => {
  return (
    <>
      <section className="weather-short">
        <div className="weather-short_img">
          <img src="./Shower.png" alt="heavy cloud weather" />
        </div>
        <div className="weather-short_info">
          <h1>
            15<span className="weather-short_temp">°c</span>
          </h1>
          <h2>Shower</h2>
        </div>
        <div className="weather-short_date">
          <span className="weather_date-today"> Today </span>
          <span className="weather_date-marker">•</span>
          <span className="weather_date-date">Fri, 5 Jun</span>
        </div>
        <div className="weather-short_location">
          <h2>Helsinki</h2>
        </div>
      </section>
    </>
  );
};

export {Weather}