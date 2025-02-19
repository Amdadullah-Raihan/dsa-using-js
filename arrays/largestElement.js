const findLargestElm = (arr) => {
  let lm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lm) lm = arr[i];
  }
  return lm;
};

console.log("largest element: ", findLargestElm([-6, -4]));
