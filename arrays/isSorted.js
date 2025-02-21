const isSorted = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

let arr = [1, 2, 9, 4, 5];
console.log("is sorted: ", isSorted(arr));
arr = [1, 2, 3, 4, 5];
console.log("is sorted: ", isSorted(arr));
