import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import BeerControl from "./BeerControl";
//import BeerList from "./BeerList";
//import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <br />
        <BeerControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
