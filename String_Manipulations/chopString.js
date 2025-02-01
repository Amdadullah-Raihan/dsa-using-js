function chopString(str, chunkLength = 1) {
  let choppedStr = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    choppedStr.push(str.slice(i, i + chunkLength));
  }
  return choppedStr;
}

console.log(chopString("w3resource"));
console.log(chopString("w3resource", 2));
console.log(chopString("w3resource", 3));
