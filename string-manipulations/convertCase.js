function convertCase(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
}
console.log(convertCase("AaBbc"));

function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

console.log(swapCase("AaB"));
