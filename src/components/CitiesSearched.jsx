import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const CitiesSearched = ({ arrayCities, setArrayCities, searchQuery, hasSearched, setLatitude, setLongitude }) => {
  const fetchLatAndLon = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=557333cd2bc318f169e5cb21158c02aa`
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
  return (
    <ListGroup>
      {arrayCities.map((city, index) => (
        <ListGroup.Item key={index}>
          {city.name}---{city.country}---{city.state}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CitiesSearched;
