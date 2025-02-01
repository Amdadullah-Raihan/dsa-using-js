function camelize(str) {
  return (str = str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  }));
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
