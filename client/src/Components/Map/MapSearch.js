import React from "react";

import { TextField, Typography, Grid } from "@material-ui/core";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import useStyles from "./styles2";

export default function Search({ panTo }) {
  const classes = useStyles();

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

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
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
        panTo({ lat, lng });
        console.log("📍 Coordinates: ", { lat, lng });
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
        // refactor later
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
    <div>
      <TextField className={classes.search}
        ref={ref}
        label="Search for Field"
        value={value}
        onChange={handleInput}
        disabled={!ready}
      ></TextField>
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
}
