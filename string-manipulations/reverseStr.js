//using recursion

//hello

function reverseStr(str) {
  if (str === "" || str.length === 1) {
    return str;
  } else return reverseStr(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr("hello"));

function reverseStr(str) {
  if (str.length === 1 || str === "") {
    return str;
  } else {
    return reverseStr(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStr("hello"));
