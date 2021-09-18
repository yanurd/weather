import '../../Css/Containers/header.css'
import gps from '../../img/gps.svg'
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
            src={gps}
            alt="Geolocation weather"
          />
        </section>
      </header>
    </>
  );
};

export { Header };
