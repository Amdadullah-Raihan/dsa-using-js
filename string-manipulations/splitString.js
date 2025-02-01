var splitWordsBySeparator = function (words, separator) {
  const separatedWordsStr = words.join(" ").split(separator).join(" ");

  const separatedWordsArr = separatedWordsStr
    .trim()
    .replace(/\s+/g, " ")
    .split(" ");

  if (separatedWordsArr[0] === "") {
    return [];
  }
  return separatedWordsArr;
};

// 1st argument
let words = ["one.two.three", "four.five", "six"];
let separator = ".";

console.log("result: ", splitWordsBySeparator(words, separator));

//2nd argument
words = ["$easy$", "$problem$"];
separator = "$";

console.log("result 2: ", splitWordsBySeparator(words, separator));

//3rd argument
words = ["|||"];
separator = "|";

console.log("result 3: ", splitWordsBySeparator(words, separator));
