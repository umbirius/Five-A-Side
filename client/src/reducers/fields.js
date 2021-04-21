export default (fields = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

      case "CREATE":
        return [...fields, action.payload]

    default:
      return fields;
  }
};
