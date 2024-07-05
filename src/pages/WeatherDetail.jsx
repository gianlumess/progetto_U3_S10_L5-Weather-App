const WeatherDetail = () => {
  const fetchWeatherCitySearched = (arrayCities) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${arrayCities[0].lat}&lon=${arrayCities[0].lon}&appid=557333cd2bc318f169e5cb21158c02aa`
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città cercata");
        }
      })
      .then((cityObj) => {
        console.log(cityObj);
      })
      .catch((err) => console.log(err));
  };
  return;
};

export default WeatherDetail;
