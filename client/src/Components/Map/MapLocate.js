export default function Locate({ panTo }) {
  // const classes = useStyles();

  return (
    // <button className={classes.locate} onClick= {() => console.log("ere")}>
    <button
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
      <img src="field.svg" /> locate me
    </button>
  );
}
