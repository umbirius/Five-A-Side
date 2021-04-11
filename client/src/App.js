import React from "react";
import NavBar from "./Components/Containers/NavBar/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container, Grid } from "@material-ui/core";
import ObjInterface from "./Components/Containers/ObjInterface/ObjInterface";

const App = () => {
  
  document.title = 'Five A Side'
  return (
    <Container className="main-container" maxWidth="lg" justify="center">
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
