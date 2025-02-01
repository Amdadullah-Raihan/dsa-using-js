function asciiTohexadecimal(str) {
  let hexValue = [];
  let asciiValue = []; /// for test

  for (let i = 0; i < str.length; i++) {
    let hex = Number(str.charCodeAt(i).toString(16));
    hexValue.push(hex);
    asciiValue.push(str.charCodeAt(i));
  }
  return [hexValue, asciiValue];
}

console.log(asciiTohexadecimal("12"));

console.log(parseInt("12").toString(16));
