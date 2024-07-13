import { useState } from "react";
import { Form } from "react-bootstrap";

const SearchQuery = ({ SearchQuery, setSearchQuery, setHasSearched }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    setHasSearched(true);
  };
  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="searchcity">
        <Form.Control
          id="form"
          type="text"
          placeholder="Inserisci Città"
          value={SearchQuery}
          onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchQuery;
