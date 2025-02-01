var reverseWords = function (s) {
  let reveresedArr = [];

  // remove all the extra white spaces first then make a array of strings
  const arrOfStr = s.trim().replace(/\s+/g, " ").split(" ");

  for (let i = arrOfStr.length - 1; i >= 0; i--) {
    reveresedArr.push(arrOfStr[i]);
  }

  return reveresedArr.join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  Hello    World   "));
console.log(reverseWords("a good    example"));
