import React from "react";
import NavBar from "./Components/Containers/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <NavBar></NavBar>
      </Container>
      <MapArea></MapArea>
    </div>
  );
};

export default App;
