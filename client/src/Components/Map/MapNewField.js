import React, { useState } from "react";
import Form from "../Form/Form";
import useStyles from "./styles2";
import AddLocationIcon from '@material-ui/icons/AddLocation';

export default function NewField() {
  // capture state to create new field
  const [newField, setNew] = useState(false);
  const classes = useStyles();

  return (
    <div>
      {newField ? (
        <div>
          <Form></Form>
          <button
            onClick={() => {
              // console.log("new field enabled")
              setNew(false);
              console.log(newField);
            }}
          >
            cancel
          </button>
        </div>
      ) : (
        <button
          className={classes.newField}
          onClick={() => {
            // console.log("new field enabled")
            setNew(true);
            console.log(newField);
          }}
        >
          <AddLocationIcon style={{ fontSize: 50}}/>
        </button>
      )}
    </div>
  );
}
