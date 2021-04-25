import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  form: {
    zIndex: "12",
    position: "absolute",
    top: "25%",
    left: "30%",
    right: "30%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "",
    textAlign: 'center', 
    padding: '12px'
  },

  button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      padding: "2px",
      verticalAlign: "center",
      alignItems: "center", 
      margin:"3px",
      width: "50%", 
      justifyContent: "center",

  },

  inputField: {
    width: "60%",
    margin: "10px",
  },

  header: {
      fontSize: "32",
      fontFamily: "BlinkMacSystemFont"
  }
}));
