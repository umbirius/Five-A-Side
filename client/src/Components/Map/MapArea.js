import React, { useState, useCallback, useRef } from "react";
import {useSelector} from 'react-redux'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import styles from "./styles";

import Search from './MapSearch'
import Locate from './MapLocate'

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

  // capture state to create new field
  const [newField, setNew] = useState(null)

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
      <NewField></NewField>
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

function NewField(){

  return (
    <button onClick={() => console.log('new field enabled')}> Create new Field</button>
  )

}
