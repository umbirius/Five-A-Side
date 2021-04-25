import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newField } from "../../actions/fields";
import ImageUploader from "react-images-upload";

// import actions to create a field here
// import reducer methods from react-redux

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  //   const [fieldData, setFieldData] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();
  const newFieldStatus = useSelector((state) => state.newFieldToggle);

  const [fieldData, setFieldData] = useState({
    name: "",
    location: "",
    cost: "",
    rating: "",
    images: [],
  });

  useEffect(() => {
    console.log(fieldData);
  });

  const clear = () => {
    setFieldData({ name: "", cost: "", rating: "", location: "" });
  };

  return (
    <Paper className={classes.form} elevation={10}>
      <form autoComplete="off">
        <Typography variant="h5" className={classes.header}>
          Create New Field
        </Typography>
        <TextField
          className={classes.inputField}
          name="name"
          label="Name"
          value={fieldData.name}
          onChange={(e) => setFieldData({ ...fieldData, name: e.target.value })}
        ></TextField>
        <TextField
          className={classes.inputField}
          name="location"
          label="Location"
          value={fieldData.location}
        ></TextField>
        <TextField
          className={classes.inputField}
          name="cost"
          label="Cost"
          value={fieldData.cost}
          onChange={(e) => setFieldData({ ...fieldData, cost: e.target.value })}
        ></TextField>
        <TextField
          className={classes.inputField}
          name="rating"
          label="Rating"
          value={fieldData.rating}
          onChange={(e) =>
            setFieldData({ ...fieldData, rating: e.target.value })
          }
        ></TextField>
        <ImageUploader
          withIcon={false}
          buttonText="Choose images"
          withPreview={true}
          onChange={(imgs) => setFieldData({ ...fieldData, images: imgs })}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            console.log("create new field");
          }}
        >
          {" "}
          Submit
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            dispatch(newField());
            console.log(newFieldStatus);
          }}
        >
          {" "}
          Cancel
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            clear();
          }}
        >
          {" "}
          Clear Form
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
