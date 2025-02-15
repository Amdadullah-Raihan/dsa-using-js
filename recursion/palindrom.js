const reverseStr = (str, start = 0, end = str.length - 1) => {
  if (start >= end) return str; // Return stray when base condition is met

  [str[start], str[end]] = [str[end], str[start]];

  return reverseStr(str, start + 1, end - 1);
};

const isPalindrom = (str) => {
  const reversedStr = reverseStr(str);
  console.log("reversed str", reverseStr(str), str);
  if (reverseStr === str) return true;
  return false;
};
const str = "abcdcba";
console.log("is ", str, "palindrom: ", isPalindrom(str));
 