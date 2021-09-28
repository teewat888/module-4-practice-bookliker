//check whether obj is empty
export const isObjEmpty = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};
