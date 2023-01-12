function reverse(string) {
  let n = string.length - 1;
  let newString = "";
  for (let i = n; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
module.exports = reverse;
