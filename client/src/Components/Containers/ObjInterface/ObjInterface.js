import { ThemeProvider } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";

export default function ObjInterface() {
  const classes = useStyles();

  return <Container className={classes.objInt}>Obj interface</Container>;
}
