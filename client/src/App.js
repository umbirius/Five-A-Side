import React from "react";
import NavBar from "./Components/Containers/NavBar/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container, Grid } from "@material-ui/core";
import ObjInterface from "./Components/Containers/ObjInterface/ObjInterface";

const App = () => {
  return (
    <Container className="main-container" maxWidth="lg">
      <NavBar></NavBar>
      <Grid container>
        <Grid xs={4} justify="center">
          <ObjInterface></ObjInterface>
        </Grid>
        <Grid xs={8} justify="center">
          <MapArea></MapArea>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
