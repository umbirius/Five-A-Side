import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  search: {
    position: "absolute",
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "400px",
    zIndex: "10",
  },

  locate: {
    position: "absolute",
    top: "3rem",
    right: "3%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "none",
    zIndex: "10",
    color: "white",
  },

  newField: {
    position: "absolute",
    top: "7rem",
    right: "3%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "none",
    zIndex: "10",
    color: "white",
  },
}));
