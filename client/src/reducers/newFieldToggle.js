export default (newField = false, action) => {
    switch (action.type) {
      case "NEW_FIELD":
          return !newField
      default:
        return newField;
    }
  };