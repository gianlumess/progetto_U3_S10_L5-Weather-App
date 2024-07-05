import { Container } from "react-bootstrap";
import SearchQuery from "../components/SearchQuery";
import TopBar from "../components/TopBar";
import Heading from "../components/Heading";
import { useState } from "react";
import CitiesSearched from "../components/CitiesSearched";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <>
      <TopBar />
      <Container>
        <Heading />
        <SearchQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} setHasSearched={setHasSearched} />
        <CitiesSearched searchQuery={searchQuery} hasSearched={hasSearched} />
      </Container>
    </>
  );
};

export default Home;
