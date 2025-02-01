function compressString(str) {
  let count = {};
  let compressedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }

  for (let char in count) {
    compressedStr += char + count[char];
  }

  return compressedStr;
}

console.log(compressString("a"));
console.log(compressString("aaabbbcc"));
console.log(compressString("aaabbbbccccc"));

//optimized

function compressStringOpt(str) {
  let count = 1;
  let compressedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedStr += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return compressedStr;
}

console.log("Optimized", compressStringOpt("a"));
console.log("Optimized", compressStringOpt("aaabbbcc"));
console.log("Optimized", compressStringOpt("aaabbbbccccc"));
