import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

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

//   return (
//     <div className={classes.search}>
//       <Autocomplete
//         onSelect={async (address) => {
//           setValue(address, false);
//           clearSuggestions();
//           try {
//             const results = await getGeocode({ address });
//             const { lat, lng } = await getLatLng(results[0]);
//             panTo({ lat, lng });
//           } catch (error) {
//             console.log(error);
//           }
//           console.log(address);
//         }}
//         freeSolo
//         renderInput={(params) => <TextField {...params} label="search" />}
//       />
//     </div>
//   );
// }
  return (
    <div className={classes.search}>
      <Combobox className={classes.search}
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
          console.log(address);
        }}
      >
        <ComboboxInput className={classes.search}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search for Field"
        />
        <ComboboxPopover className={classes.search}>
          <ComboboxList className={classes.search}>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption className={classes.search} key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
