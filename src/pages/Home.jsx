import { Container } from "react-bootstrap";
import SearchQuery from "../components/SearchQuery";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Container>
        <SearchQuery />
      </Container>
    </>
  );
};

export default Home;
