import "./App.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav items={["Home", "About", "Browse"]} />
      <Container>
        <Welcome text="Francesco" />
        <div className="d-flex flex-wrap justify-content-between">
          <AllTheBooks books={[]} />
        </div>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
