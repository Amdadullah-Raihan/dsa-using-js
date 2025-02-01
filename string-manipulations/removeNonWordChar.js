function removeNonWordChar(str) {
  return str.replace(/[\W\d]+/g, "");
}

console.log(removeNonWordChar("asldfas;12342546*&^"));
