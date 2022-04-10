import React from "react";
import { Button, Card } from "react-bootstrap";

const CustomeCard = ({ movieObj, fun }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title className="text-dark">Name: {movieObj.Title}</Card.Title>
        <Card.Title className="text-dark">Actor: {movieObj.Actors}</Card.Title>
        <Card.Title className="text-dark">
          Rating:{movieObj.imdbRating}
        </Card.Title>
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
      </Card.Body>
    </Card>
  );
};

export default CustomeCard;
