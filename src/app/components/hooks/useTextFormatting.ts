// capitalises first character of a string
export const capitaliseFirstChar = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// renders commas between inline array elements
export const renderComma = (index: number, length: number) => {
  return index < length - 1 ? ", " : null;
};
