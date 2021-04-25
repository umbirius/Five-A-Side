import { combineReducers } from "redux";

import fields from "./fields";
import newFieldToggle from "./newFieldToggle";

export default combineReducers({
  fields,
  newFieldToggle,
});
