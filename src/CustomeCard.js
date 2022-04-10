import React from "react";
import { Button, Card } from "react-bootstrap";

// btnDelete have default value.in MovieList btnDelete it have true value.So if we put value from MovieList btn have true value otherwise it will show default value.
const CustomeCard = ({ movieObj, fun, btnDelete = false }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title className="text-dark">Name: {movieObj.Title}</Card.Title>
        <Card.Title className="text-dark">Actor: {movieObj.Actors}</Card.Title>
        <Card.Title className="text-dark">
          Rating:{movieObj.imdbRating}
        </Card.Title>

        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            {/* invoking function inside the function with new parameter happy */}
            <Button variant="info" onClick={() => fun("happy")}>
              {" "}
              Happy
            </Button>
            <Button variant="secondary" onClick={() => fun("sad")}>
              Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomeCard;
