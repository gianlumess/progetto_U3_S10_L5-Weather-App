import { useEffect } from "react";

const CitiesSearched = ({ setArrayCities, searchQuery, hasSearched, setLatitude, setLongitude }) => {
  const fetchLatAndLon = () => {
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
        setLatitude(cityObj[0].lat);
        setLongitude(cityObj[0].lon);
        setArrayCities(cityObj);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (hasSearched) {
      fetchLatAndLon();
    }
  }, [searchQuery]);
  return;
};

export default CitiesSearched;
