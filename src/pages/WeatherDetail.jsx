import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Col, Container, Row } from "react-bootstrap";
import SideBarWeather from "../components/SideBarWeather";
import Forecasts3Hour from "../components/Forecasts3Hour";

const WeatherDetail = () => {
  const [infoCityWeather, setInfoCityWeather] = useState(null);
  const [infoNextDays, setInfoNextDays] = useState(null);
  const params = useParams();
  //funzione che converte la data ricevuta dalle API
  const createDate = (dt, type) => {
    const day = new Date(dt * 1000);
    if (type == "long") {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return day.toLocaleString("it-IT", options); // Friday, January 15, 2021
    } else {
      return day.toLocaleString("it-IT", { weekday: "long" }); // Friday
    }
  };

  //funzione per la fetch per reperire i dati sul meteo della città selezionata, i parametri obbligatori vengono passati sull'url(lat e lon)
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
        console.log("meteo di oggi della città:", cityObj.name, cityObj);
        setInfoCityWeather(cityObj);
      })
      .catch((err) => console.log(err));
  };

  const fetchWeatherNextDays = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=557333cd2bc318f169e5cb21158c02aa&units=metric`
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città cercata");
        }
      })
      .then((nextDays) => {
        console.log("meteo dei prossimi giorni", nextDays);
        setInfoNextDays(nextDays);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (infoCityWeather === null) {
      fetchWeatherCitySearched();
      fetchWeatherNextDays();
    }
  }, [infoCityWeather]);
  return (
    <>
      <TopBar />
      <Container id="container-previsioni" className="mt-5 border rounded ">
        {infoCityWeather !== null && infoNextDays !== null && (
          <Row id="sidebar">
            <Col md={3} className="border-end py-2 text-center">
              <SideBarWeather infoCityWeather={infoCityWeather} infoNextDays={infoNextDays} createDate={createDate} />
            </Col>
            <Col className="d-flex justify-content-end flex-column" md={9}>
              <h1 className="display-1">{infoCityWeather.weather[0].description}</h1>

              <hr className="mb-0" />
              <Row className="py-2">
                <Forecasts3Hour infoNextDays={infoNextDays} />
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default WeatherDetail;
