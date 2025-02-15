const recursiveBubbleSort = (arr, n = arr.length) => {
  if (n === 1 || n == 0) return arr;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
  }

  return recursiveBubbleSort(arr, n - 1);
};

const arr = [0, -6, -2, 1, 6];
console.log("sorted arr: ", recursiveBubbleSort(arr));
