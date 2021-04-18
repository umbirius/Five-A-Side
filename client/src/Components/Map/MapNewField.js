import React, { useState } from "react";
import Form from "../Form/Form";

export default function NewField() {
  // capture state to create new field
  const [newField, setNew] = useState(false);

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
          onClick={() => {
            // console.log("new field enabled")
            setNew(true);
            console.log(newField);
          }}
        >
          add field
        </button>
      )}
    </div>
  );
}
