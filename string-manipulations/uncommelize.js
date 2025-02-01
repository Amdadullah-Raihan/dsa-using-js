function uncamelize(str, separator) {
  // Replace all capital letters by separator followed by lowercase one
  str = str.replace(/[A-Z]/g, function (matchedLetter) {
    return separator + matchedLetter.toLowerCase();
  });

  // Remove first separator
  return str.replace(new RegExp("^" + separator), "");
}

console.log(uncamelize("helloWorld", " "));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("HelloWorld", "_"));
