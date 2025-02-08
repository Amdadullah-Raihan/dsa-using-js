const reverseArray = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return arr; // Return array when base condition is met

  [arr[start], arr[end]] = [arr[end], arr[start]];

  return reverseArray(arr, start + 1, end - 1);
};

let arr = [1, 2, 3, 4, 5];

const reverseArrUsingLoop = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
};
console.log("reversed array:", reverseArray(arr));

// reverseArrUsingLoop(arr);
