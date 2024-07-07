import { Col } from "react-bootstrap";

const Forecasts3Hour = ({ infoNextDays }) => {
  return (
    <Col>
      {infoNextDays.list.slice(0, 10).map((forecast) => (
        <p>ciao</p>
      ))}
    </Col>
  );
};

export default Forecasts3Hour;
