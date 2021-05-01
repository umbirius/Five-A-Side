import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFields, newField } from "../../actions/fields";
import ImageUploader from "react-images-upload";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import LocationOnIcon from "@material-ui/icons/LocationOn";


import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  //   const [fieldData, setFieldData] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();
  const newFieldStatus = useSelector((state) => state.newFieldToggle);

  const [fieldData, setFieldData] = useState({
    name: "",
    location: { name: "", lat: "", lng: "" },
    cost: "",
    rating: "",
    images: [],
  });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 40.728157,
        lng: () => -74.077644,
      },
      radius: 200000,
    },
  });

  useEffect(() => {
    console.log(fieldData);
  });

  const clear = () => {
    setFieldData({
      name: "",
      cost: "",
      rating: "",
      location: { name: "", lat: "", lng: "" },
      images: [],
    });
  };

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
    setFieldData({ ...fieldData, location: { name: e.target.value } });
    console.log(`handle Input: ${e.target.value}`);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    // console.log(`handle select: ${value}`);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
        setFieldData({
          ...fieldData,
          location: { name: description, lat: lat, lng: lng },
        });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Grid container alignItems="center">
          <Grid item>
            <LocationOnIcon className={classes.icon} />
          </Grid>
          <Grid item xs onClick={handleSelect(suggestion)}>
            <Typography key={place_id} variant="body1" color="textPrimary">
              {main_text}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {secondary_text}
            </Typography>
          </Grid>
        </Grid>

      );
    });

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
        <div ref={ref}>
          <TextField
            className={classes.inputField}
            name="location"
            label="Location"
            value={fieldData.location.name}
            onChange={handleInput}
            disabled={!ready}
          ></TextField>
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
        <TextField
          className={classes.inputField}
          name="cost"
          label="Cost (0-5)"
          value={fieldData.cost}
          onChange={(e) => setFieldData({ ...fieldData, cost: e.target.value })}
        ></TextField>
        <TextField
          className={classes.inputField}
          name="rating"
          label="Rating (0-5)"
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

