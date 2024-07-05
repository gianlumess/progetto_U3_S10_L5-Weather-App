import { Container } from "react-bootstrap";

const SideBarWeather = ({ infoCityWeather }) => {
  return (
    <Container>
      <p className="mb-1">
        {infoCityWeather.name}, {infoCityWeather.sys.country}
      </p>
      <h2>{infoCityWeather.main.temp} Gradi</h2>
    </Container>
  );
};

export default SideBarWeather;
