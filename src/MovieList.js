import React, { useState } from "react";
import { Row, Button, ButtonGroup, Col } from "react-bootstrap";
import CustomeCard from "./CustomeCard";
import CustomeList from "./CustomeList";

const MovieList = ({ movieList, deleteMovie }) => {
  const [mood, setMood] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  // filter first then display

  // its variable

  // using tersory operators if mood have some cat the it will return filter otherwise all the movieList

  const filterMovies = mood
    ? movieList.filter((movie) => movie.cat === mood)
    : movieList;
  return (
    <div className="py-3">
      <Row className="text-center">{mood || "ALL"} List is Select</Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="info" onClick={() => setMood("happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => setMood("sad")}>
              Lazy
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => setIsGrid(true)}>
              {" "}
              Grid
            </Button>
            <Button variant="info" onClick={() => setIsGrid(false)}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-wrap ">
          {filterMovies.map((movie, i) =>
            isGrid ? (
              <CustomeCard
                key={i}
                movieObj={movie}
                btnDelete={true}
                fun={deleteMovie}
              />
            ) : (
              <CustomeList
                key={i}
                movieObj={movie}
                btnDelete={true}
                fun={deleteMovie}
              />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
