import { Dataset } from "../models/models";

export const cleanInputValue = (inputValue: string) => {
  let newInput = inputValue.toLowerCase();
  const result = newInput.charAt(0).toUpperCase() + newInput.slice(1);
  return result;
};

export const pathGet = (a: Dataset, query: string) => {
  // forgive all the following any keywords, no time to ensure all types
  const findKeyInObj = (val: any) => {
    const result: any = {};
    for (const key in val) {
      if (typeof val[key] === "object" && !Array.isArray(val[key])) {
        const newObj: any = findKeyInObj(val[key]);
        for (const newKey in newObj) {
          result[`${key}.${newKey}`] = newObj[newKey];
        }
      } else {
        result[key] = val[key];
      }
    }
    return result;
  };
  const flattenedObject: any = findKeyInObj(a);
  for (const key in flattenedObject) {
    if (flattenedObject[key] === query) {
      return key;
    }
  }
};
