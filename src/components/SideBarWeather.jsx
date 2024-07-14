import { Container, Image } from "react-bootstrap";
import { ArrowDownShort, ArrowUpShort, Wind } from "react-bootstrap-icons";
import Forecast5Days from "./Forecast5Days";

const SideBarWeather = ({ infoCityWeather, infoNextDays, createDate }) => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center">
        <p className="mb-1">
          {infoCityWeather.name}, {infoCityWeather.sys.country}
        </p>
        <p>{createDate(infoCityWeather.dt, "long")}</p>
        <h2>
          <Image src={`http://openweathermap.org/img/w/${infoCityWeather.weather[0].icon}.png`} />
          {infoCityWeather.main.temp.toString().split("").splice(0, 2)}&#176;C
        </h2>
      </div>

      <div className="lead d-flex justify-content-around align-items-center">
        <div>
          <ArrowDownShort />
          {infoCityWeather.main.temp_min.toString().split("").splice(0, 2)}&#176;
        </div>

        <div>
          <Wind />
          {infoCityWeather.wind.speed}
        </div>

        <div>
          <ArrowUpShort />
          {infoCityWeather.main.temp_max.toString().split("").splice(0, 2)}&#176;
        </div>
      </div>
      <hr />
      <p>Next Days</p>

      {/* generazione previsioni dei prossimi 3 giorni */}
      <Forecast5Days infoNextDays={infoNextDays} />
    </Container>
  );
};

export default SideBarWeather;
