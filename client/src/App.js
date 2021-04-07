import React from "react";
import NavBar from "./Components/Containers/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth='lg'>
      <NavBar></NavBar>
      <MapArea></MapArea>
    </Container>
  );
};

export default App;
