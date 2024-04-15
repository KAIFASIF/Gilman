export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const splitWord = (str: string) => {
  return str.split(/(?=[A-Z])/).join(" ");
};

export const splitAndTitleCase = (str: string) => {
  const splittedWord = str.split(/(?=[A-Z])/).join(" ");
  return toTitleCase(splittedWord);
};
