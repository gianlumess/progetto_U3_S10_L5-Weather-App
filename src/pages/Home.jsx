import { Container } from "react-bootstrap";
import SearchQuery from "../components/SearchQuery";
import TopBar from "../components/TopBar";
import Heading from "../components/Heading";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <TopBar />
      <Container>
        <Heading />
        <SearchQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Container>
    </>
  );
};

export default Home;
