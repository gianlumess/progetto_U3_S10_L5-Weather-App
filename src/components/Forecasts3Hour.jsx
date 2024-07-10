import { Col, Image } from "react-bootstrap";

const Forecasts3Hour = ({ infoNextDays }) => {
  return (
    <Col className="d-flex">
      {infoNextDays.list.slice(0, 8).map((forecast, index) => (
        <Col className="d-flex flex-column align-items-center" key={"previsione ogni 3 ore" + index}>
          <span className="lead">{forecast.dt_txt.split(" ")[1].slice(0, 5)}</span>
          <hr className="m-0" />
          <Image src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
          <span>{forecast.main.temp.toString().split("").slice(0, 2)}&#176;C</span>
        </Col>
      ))}
    </Col>
  );
};

export default Forecasts3Hour;
