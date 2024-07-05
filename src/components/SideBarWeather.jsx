import { Container } from "react-bootstrap";

const SideBarWeather = ({ infoCityWeather }) => {
  return (
    <Container>
      <h2>{infoCityWeather.main.temp} Gradi</h2>
    </Container>
  );
};

export default SideBarWeather;
