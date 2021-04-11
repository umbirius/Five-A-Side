import React, { useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import dotenv from "dotenv";
import styles from "./styles";

dotenv.config();

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 40.728157,
  lng: -74.077644,
};

const options = {
  styles: styles
}

const MapArea = () => {

  // loads google script, gives back two variables (isLoaded and loadError)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    // enables places libraries when google script loads
    libraries,
  });

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={options}></GoogleMap>
  );
};

export default MapArea;
