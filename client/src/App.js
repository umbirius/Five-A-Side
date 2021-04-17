import React, {useEffect} from "react";
import NavBar from "./Components/Containers/NavBar/NavBar";
import MapArea from "./Components/Map/MapArea";
import { Container, Grid } from "@material-ui/core";
import ObjInterface from "./Components/Containers/ObjInterface/ObjInterface";

import { getFields } from "./actions/fields";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFields);
  });

  const fields = useSelector((state) => state.fields)
  console.log(fields)

  document.title = "Five A Side";
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
