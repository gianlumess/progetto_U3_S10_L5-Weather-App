import { Container } from "react-bootstrap";
import { ArrowDownShort, ArrowUpShort, Wind } from "react-bootstrap-icons";

const SideBarWeather = ({ infoCityWeather }) => {
  return (
    <Container>
      <p className="mb-1">
        {infoCityWeather.name}, {infoCityWeather.sys.country}
      </p>
      <h2>{infoCityWeather.main.temp}&#176;</h2>
      <div className="lead d-flex justify-content-around align-items-center">
        <div>
          <ArrowDownShort />
          {infoCityWeather.main.temp_min}
        </div>

        <div>
          <Wind />
          {infoCityWeather.wind.speed}
        </div>

        <div>
          <ArrowUpShort />
          {infoCityWeather.main.temp_max}
        </div>
      </div>
    </Container>
  );
};

export default SideBarWeather;
