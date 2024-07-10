import { Col, Image, Row } from "react-bootstrap";

const Forecast5Days = ({ infoNextDays }) => {
  return (
    <Row>
      {infoNextDays.list.slice(0, 5).map((forecast, index) => (
        <Col key={index}>
          <Image src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
        </Col>
      ))}
    </Row>
  );
};

export default Forecast5Days;
