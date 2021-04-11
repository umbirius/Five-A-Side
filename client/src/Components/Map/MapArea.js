import React, { useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
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

  const [markers, setMarkers] = useState([]);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/field.svg",
              scaledSize: new window.google.maps.Size(30,30), 
              origin: new window.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(15,15),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapArea;
