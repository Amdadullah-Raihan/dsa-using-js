function countSubStr(mainStr, subStr) {
  mainStr = mainStr.toLowerCase().split(" ");
  let count = 0;

  for (let i = 0; i < mainStr.length; i++) {
    if (mainStr[i] === subStr) {
      count++;
    }
  }
  return count;
}

console.log(
  countSubStr("The quick the brown fox jumps over the lazy dog", "raihan")
);
