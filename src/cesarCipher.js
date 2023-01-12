function shift(str) {
  let n = str.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (str[i] == "z") {
      result.push("a");
      continue;
    }
    if (str[i] == "Z") {
      result.push("A");
      continue;
    } else {
      result.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }
  }
  return result.join("");
}

module.exports = shift;
