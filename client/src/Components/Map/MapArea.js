import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import dotenv from "dotenv";
import useWindowDimensions from "./windowDimensions";
import useStyles from "./styles";
import Geolocation from "react-native-geolocation-service";

dotenv.config();

const center = {
  lat: 40.728157,
  lng: -74.077644,
};

const mapContainerStyle = {
  width: "100%",
  height: "800px",
};

const MapArea = () => {

  // const mapContainerStyle = useWindowDimensions()
  const classes = useStyles();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      className={classes.mapArea}
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapArea;
