const TodayImage = ({ abbreviation, status }) => {
  const IMG_API = (iconAbbreviation) =>
    `https://www.metaweather.com/static/img/weather/${iconAbbreviation}.svg`;
  return <img title={status} src={IMG_API(abbreviation)} alt={status} />;
};

export { TodayImage };
