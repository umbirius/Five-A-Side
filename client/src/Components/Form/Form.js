import React, { useState } from "react";

// import actions to create a field here
// import reducer methods from react-redux

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  //   const [fieldData, setFieldData] = useState({});
  const classes = useStyles()

  return (
    <Paper className={classes.newField}>
      <form>
        <Typography>Create New Field</Typography>
        <TextField name="name" label="Name"></TextField>
        <TextField name="cost" label="Cost"></TextField>
        <TextField name="rating" label="Rating"></TextField>
        <TextField name="location" label="Location"></TextField>
        <Button> Submit</Button>
        <Button> Click on Map</Button>
        <Button> Cancel</Button>
      </form>

    </Paper>
  );
};

export default Form
