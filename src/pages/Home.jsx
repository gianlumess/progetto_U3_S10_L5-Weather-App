import { Container } from "react-bootstrap";
import SearchQuery from "../components/SearchQuery";
import TopBar from "../components/TopBar";
import Heading from "../components/Heading";
import { useState } from "react";
import CitiesSearched from "../components/CitiesSearched";

const Home = ({ arrayCities, setArrayCities, setLatitude, setLongitude }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <>
      <TopBar />
      <Container>
        <Heading />
        <SearchQuery
          arrayCities={arrayCities}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setHasSearched={setHasSearched}
        />
        <CitiesSearched
          arrayCities={arrayCities}
          setArrayCities={setArrayCities}
          searchQuery={searchQuery}
          hasSearched={hasSearched}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
      </Container>
    </>
  );
};

export default Home;
