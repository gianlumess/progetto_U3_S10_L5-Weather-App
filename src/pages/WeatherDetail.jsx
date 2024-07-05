import { useEffect } from "react";
import { useParams } from "react-router-dom";

const WeatherDetail = () => {
  const params = useParams();
  const fetchWeatherCitySearched = (arrayCities) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=557333cd2bc318f169e5cb21158c02aa`
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

  useEffect(() => {
    fetchWeatherCitySearched();
  }, [params.lat]);
  return;
};

export default WeatherDetail;
