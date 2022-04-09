import { Container } from "react-bootstrap";
import "./App.css";
import SearchForm from "./SearchForm";
import Title from "./Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
