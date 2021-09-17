const Header = () => {
  return (
    <>
      <header className="header">
        <section className="header-search">
          <span className="header-search_btn">Search for places</span>
        </section>
        <section className="header-location">
          <img
            className="header-location_search"
            src="./gps.svg"
            alt="Geolocation weather"
          />
        </section>
      </header>
    </>
  );
};

export { Header };
