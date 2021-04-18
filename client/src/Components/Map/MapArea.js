import React, { useState, useCallback, useRef } from "react";
import {useSelector} from 'react-redux'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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

// import dotenv from "dotenv";
import styles from "./styles";
import useStyles from "./styles2";

// dotenv.config();

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 40.728157,
  lng: -74.077644,
};

const options = {
  styles: styles,
  disableDefaultUI: true,
  zoomControll: true,
};

const MapArea = () => {
  // loads google script, gives back two variables (isLoaded and loadError)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    // enables places libraries when google script loads
    libraries,
  });

  const fields = useSelector((state) => state.fields);

  console.log(fields)

  const [markers, setMarkers] = useState([]);

  // starts off as null and gets its marker when user selects
  const [selected, setSelected] = useState(null);

  // allows callback to always retain the same unless we change the second argument in the array
  const onMapClick = useCallback((event) => {
    //change this to create field with new action
    
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  // useState when you want to cause rerenders, useRef when you want to use state without causing re-renders

  const mapRef = useRef();
  // used to access all map references without causing re-renders
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //pan to specific location on the map
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <Search panTo={panTo}></Search>
      <Locate panTo={panTo}></Locate>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/field.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
              console.log(selected);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Field</h2>
              <p>
                <ul>Times</ul>
                <ul>Cost</ul>
                <ul>Days</ul>
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default MapArea;

function Locate({ panTo }) {
  // const classes = useStyles();

  return (
    // <button className={classes.locate} onClick= {() => console.log("ere")}>
    <button
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          () => console.log("unable to retrieve")
        );
        // navigator.geolocation.getCurrentPosition(
        //   (position) => {
        //     console.log(position);
        //     panTo({
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude,
        //     });
        //   },
        //   () => null,
        //   options
        // );
      }}
    >
      <img src="field.svg" />
    </button>
  );
}

function Search({ panTo }) {
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

  return (
    <div className={classes.search}>
      <Combobox
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
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search for Field"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
