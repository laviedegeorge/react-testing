export const removeEmptyStringValues = (obj) => {
  try {
    let newObj = {};
    for (const key in obj) {
      if (obj[key] !== "") {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  } catch (err) {
    console.err("error from removeEmptyStringValues FN", err);
    return obj;
  }
};
