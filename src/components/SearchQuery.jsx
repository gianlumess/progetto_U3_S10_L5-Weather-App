import { Form, InputGroup } from "react-bootstrap";

const SearchQuery = () => {
  return (
    <Form className="mt-5">
      <Form.Group className="mb-3" controlId="searchcity">
        <Form.Label className="display-5">Scopri che tempo fà</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Città" />
      </Form.Group>
    </Form>
  );
};

export default SearchQuery;
