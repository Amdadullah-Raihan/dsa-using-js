const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};

const arr = [1, 4, 7, -6, 2, 0];
console.log("Element found in index ", linearSearch(arr, 7));
