var findWordsContaining = function (words, x) {
  let result = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
};

let words = ["leet", "code"];
let isContain = "e";
console.log("test case-1 ", findWordsContaining(words, isContain));

words = ["abc", "bcd", "aaaa", "cbc"];
isContain = "a";
console.log("test case-2 ", findWordsContaining(words, isContain));

words = ["abc", "bcd", "aaaa", "cbc"];
isContain = "z";
console.log("test case-3 ", findWordsContaining(words, isContain));

words = ["aaaa", "aaaa", "aaaa", "aaaa", "aaaa", "aaaa"];
isContain = "a";
console.log("test case-4 ", findWordsContaining(words, isContain));
