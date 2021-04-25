import * as api from "../api/fields";

export const getFields = () => async (dispatch) => {
  try {
    console.log("fetching fields");
    const { data } = await api.fetchFields();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
    console.log("go fix it");
  }
};

export const createField = (field) => async (dispatch) => {
  try {
    const { data } = await api.createField(field);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const newField = () => async (dispatch) => {
  try {
    dispatch({ type: "NEW_FIELD" });
        console.log("dispatch new field action")
  } catch (error) {
      console.log(error.message)
  }
};
