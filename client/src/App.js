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
    dispatch(getFields());
  }, [dispatch]);

  const fields = useSelector((state) => state.fields)
  console.log(fields)

  document.title = "Five A Side";
  return (
      <MapArea></MapArea>
    // <Container className="main-container" maxWidth="100%" justify="center">
    //   <NavBar></NavBar>
    //   {/* <Grid container> */}
    //     {/* <Grid xs={4} justify="center">
    //       <ObjInterface></ObjInterface>
    //     </Grid> */}
    //     <Grid justify="center">
    //     </Grid>
    //   {/* </Grid> */}
    // </Container>
  );
};

export default App;
