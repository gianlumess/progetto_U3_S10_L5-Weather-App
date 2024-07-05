import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Col, Container, Row } from "react-bootstrap";
import SideBarWeather from "../components/SideBarWeather";

const WeatherDetail = () => {
  const [infoCityWeather, setInfoCityWeather] = useState(null);
  const params = useParams();
  const fetchWeatherCitySearched = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=557333cd2bc318f169e5cb21158c02aa&units=metric`
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
        setInfoCityWeather(cityObj);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (infoCityWeather === null) {
      fetchWeatherCitySearched();
    }
  }, [infoCityWeather]);
  return (
    <>
      <TopBar />
      <Container>
        {infoCityWeather !== null && (
          <Row id="sidebar" className="mt-5 border">
            <Col md={3} className="border-end text-center py-2">
              <SideBarWeather infoCityWeather={infoCityWeather} />
            </Col>
            <Col md={9}></Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default WeatherDetail;
