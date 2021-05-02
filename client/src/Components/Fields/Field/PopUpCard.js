import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const PopUpCard = ({ selected, setSelected }) => {
  return (
    <InfoWindow
      position={{
        lat: selected.location.lat,
        lng: selected.location.lng,
      }}
      onCloseClick={() => {
        setSelected(null);
      }}
    >
      <div>
        <Typography variant="h6">{selected.name}</Typography>
        <Typography variant="body2">{selected.location.name}</Typography>
        <Typography variant="body1">Cost: {selected.cost}</Typography>
        <Typography variant="body1">Rating: {selected.rating}</Typography>
      </div>
    </InfoWindow>
  );
};

export default PopUpCard;
