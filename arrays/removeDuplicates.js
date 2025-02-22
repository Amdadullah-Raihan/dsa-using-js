var removeDuplicates = function (arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};

const arr = [1, 1, 2];
console.log("without duplicate: ", removeDuplicates(arr));
