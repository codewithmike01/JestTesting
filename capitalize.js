function capitalized(string) {
  const lengthStr = string.lenght;
  const str1 = string.slice(1, lengthStr);
  const str2 = string[0].toUpperCase();
  return str2 + str1;
}

module.exports = capitalized;
