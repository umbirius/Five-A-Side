export default (fields = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return fields;
  }
};
