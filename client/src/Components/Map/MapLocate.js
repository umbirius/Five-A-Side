import React from "react";
import useStyles from "./styles2";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Fab } from "@material-ui/core";

export default function Locate({ panTo }) {
  const classes = useStyles();

  return (
    // <button className={classes.locate} onClick= {() => console.log("ere")}>
    <Fab
      className={classes.locate}
      onClick={() => {
        console.log("button clicked for location set up function later");
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
      <PersonPinIcon style={{ fontSize: 40 }} />
    </Fab>
  );
}
