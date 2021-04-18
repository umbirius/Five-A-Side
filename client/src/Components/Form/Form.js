import React, { useState } from "react";

// import actions to create a field here
// import reducer methods from react-redux

import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
  //   const [fieldData, setFieldData] = useState({});

  return (
    <Paper>
      <form>
        <Typography>Add Field</Typography>
        <TextField name="name" label="Name"></TextField>
        <TextField name="cost" label="Cost"></TextField>
        <TextField name="rating" label="Rating"></TextField>
        <TextField name="location" label="Location"></TextField>
      </form>

    </Paper>
  );
};

export default Form
