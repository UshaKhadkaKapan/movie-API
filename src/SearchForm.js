import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovie(search);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="First name" onChange={handleOnChange} />
          </Col>
          <Col>
            <Button variant="warning" type="Submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
