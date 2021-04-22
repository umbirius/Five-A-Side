import React, { useState } from "react";
import Form from "../Form/Form";
import useStyles from "./styles2";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import { Fab } from "@material-ui/core";

export default function NewField() {
  // capture state to create new field
  const [newField, setNew] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Fab
        className={classes.newField}
        onClick={() => {
          // console.log("new field enabled")
          setNew(true);
          console.log(newField);
        }}
      >
        <AddLocationIcon style={{ fontSize: 40 }} />
      </Fab>{" "}
      {newField && <Form></Form>}
    </div>
  );
}
