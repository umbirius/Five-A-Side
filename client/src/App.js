import React from "react";
import NavBar from "./Components/Containers/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Container className="main-container" maxWidth="lg">
      <NavBar></NavBar>
      <Grid container >
        <Grid xs={8} justify="center">
          <MapArea></MapArea>
        </Grid>
        <Grid s={4} justify="center">
          <MapArea></MapArea>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
