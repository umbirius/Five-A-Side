import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import useStyles from "./styles2";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import { Fab } from "@material-ui/core";
import { newField } from "../../actions/fields";

export default function NewField() {
  // capture state to create new field
  const newFieldStatus = useSelector((state) => state.newFieldToggle)
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <Fab
        className={classes.newField}
        onClick={() => {
          // console.log("new field enabled")
          dispatch(newField())
          console.log(newFieldStatus);
        }}
      >
        <AddLocationIcon style={{ fontSize: 30 }} />
      </Fab>{" "}
      {newFieldStatus && <Form></Form>}
    </div>
  );
}
