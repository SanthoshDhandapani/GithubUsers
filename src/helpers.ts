export const getUniqueEntries = (arr: { [key: string]: string; }[], key: string) => {
  return arr.filter(
    (obj, index) => arr.findIndex((item) => item[key] === obj[key]) === index
  );
};
