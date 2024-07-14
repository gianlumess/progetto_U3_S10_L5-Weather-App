import { Col, Image, Row } from "react-bootstrap";

const Forecast5Days = ({ infoNextDays }) => {
  return (
    <Row>
      {infoNextDays.list
        .filter((day) => {
          const date = new Date(day.dt_txt);
          return date.getHours() === 0;
        })
        .map((forecast) => console.log(forecast))}
    </Row>
  );
};

export default Forecast5Days;
