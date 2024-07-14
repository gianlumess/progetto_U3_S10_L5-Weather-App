import { Col, Image, Row } from "react-bootstrap";

const Forecast5Days = ({ infoNextDays, createDate }) => {
  return (
    <Row className="gy-3">
      {infoNextDays.list
        .filter((day) => {
          const date = new Date(day.dt_txt);
          return date.getHours() === 0;
        })
        .map((forecast, index) => (
          <Col className="d-flex align-items-center" md={12} key={index}>
            <Image src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
            <div className="d-flex flex-column">
              <span>{createDate(forecast.dt, "short")}</span>
              <span>{forecast.weather[0].main}</span>
            </div>
            <div className="d-flex flex-column ms-auto">
              <span>{forecast.main.temp_min.toString().split("").splice(0, 2)}</span>
              <span>{forecast.main.temp_max.toString().split("").splice(0, 2)}</span>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Forecast5Days;
