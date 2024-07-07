import { Col } from "react-bootstrap";

const Forecasts3Hour = ({ infoNextDays }) => {
  return (
    <Col className="d-flex">
      {infoNextDays.list.slice(0, 10).map((forecast, index) => (
        <Col className="" key={"previsione ogni 3 ore" + index}>
          <span>{forecast.dt_txt}</span>
        </Col>
      ))}
    </Col>
  );
};

export default Forecasts3Hour;
