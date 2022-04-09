import { Container } from "react-bootstrap";
import "./App.css";
import CustomeCard from "./CustomeCard";
import { fetchMovie } from "./helper/AxiosHealper";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
import Title from "./Title";

function App() {
  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    console.log(data);
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        <CustomeCard />
        <hr />
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
