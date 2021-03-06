import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CustomeCard from "./CustomeCard";
import { fetchMovie } from "./helper/AxiosHealper";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
import Title from "./Title";
import { randomChar } from "./helper/randomGeneratorHelper";

function App() {
  const [searchMovie, setSearchMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    console.log("useEffect executed ...");
    const char = randomChar();
    getMovie(char);

    // create random char
  }, []);

  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    setSearchMovie(data);
  };

  const addToMovieList = (type) => {
    // adding cat properties in movie list

    setMovieList([...movieList, { ...searchMovie, cat: type }]);
    setSearchMovie({});
  };

  const deleteMovie = (imdbID) => {
    alert(imdbID);
    const filteredMovieList = movieList.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setMovieList(filteredMovieList);
  };

  console.log(searchMovie);
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        {searchMovie?.imdbID && (
          <CustomeCard movieObj={searchMovie} fun={addToMovieList} />
        )}

        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
