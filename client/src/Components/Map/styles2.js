import { fade, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  // search: {
  //   position: "absolute",
  //   top: "1rem",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   width: "75%",
  //   maxWidth: "400px",
  //   zIndex: "10",
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  // },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  locate: {
    position: "absolute",
    top: "6rem",
    right: "3%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "none",
    zIndex: "10",
    color: "white",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
  },

  newField: {
    position: "absolute",
    top: "10rem",
    right: "3%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "none",
    zIndex: "10",
    color: "white",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
  },

  icon: {
    fontSize: "50"
  },

  suggestions: {
    zIndex: "14"
  }
}));
