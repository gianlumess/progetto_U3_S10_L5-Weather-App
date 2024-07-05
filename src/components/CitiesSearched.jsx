import { useEffect, useState } from "react";

const CitiesSearched = ({ searchQuery, hasSearched }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=557333cd2bc318f169e5cb21158c02aa`
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento delle recensioni");
        }
      })
      .then((cityObj) => {
        console.log(cityObj);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (hasSearched) {
      fetchCityWeather();
    }
  }, [searchQuery]);
  return;
};

export default CitiesSearched;
