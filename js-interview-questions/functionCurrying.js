function curriedFunc(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(curriedFunc(5)(3)(2));
