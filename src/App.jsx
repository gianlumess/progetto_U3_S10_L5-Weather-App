import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeatherDetail from "./pages/WeatherDetail";
import { useState } from "react";

function App() {
  const [arrayCities, setArrayCities] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setArrayCities={setArrayCities} setLatitude={setLatitude} setLongitude={setLongitude} />}
        />
        <Route
          path="/weather-detail/:cityName"
          element={<WeatherDetail arrayCities={arrayCities} latitude={latitude} longitude={longitude} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
