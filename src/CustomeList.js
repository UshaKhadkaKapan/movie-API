import React from "react";
import { Button, Card } from "react-bootstrap";

// btnDelete have default value.in MovieList btnDelete it have true value.So
// if we put value from MovieList btn have true value otherwise it will show default value.

const CustomeList = ({ movieObj, fun, btnDelete = false }) => {
  return (
    <Card style={{ width: "100%" }} className="mt-5 me-3 d-flex flex-row">
      <Card.Img
        variant="top"
        src={movieObj.Poster}
        style={{ width: "350px" }}
      />
      <Card.Body>
        <Card.Title className="text-dark">Name: {movieObj.Title}</Card.Title>
        <Card.Title className="text-dark">Actor: {movieObj.Actors}</Card.Title>
        <Card.Title className="text-dark">
          Rating:{movieObj.imdbRating}
        </Card.Title>
        <p className="text-dark">{movieObj.Plot}</p>

        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => fun(movieObj.imdbID)}
            >
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

export default CustomeList;
