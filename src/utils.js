export const iterateEntries = (object) => {
  for (const [key, value] of Object.entries(object)) {
    console.log(key, value);
  }
};
