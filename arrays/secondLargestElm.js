//Brute force - sort the arr and pick the value of 2nd index(Only works if there are no duplicates)

const find2ndLargest_BruteForce = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  const largestElm = sortedArr[sortedArr.length - 1];
  for (let i = sortedArr.length - 2; i >= 0; i--) {
    if (i !== largestElm) return arr[i];
  }
};

const arr = [6, 3, 1, -6, 10, 7];
console.log(
  "second largest elm(brute force): ",
  find2ndLargest_BruteForce(arr)
);

//Better approach with two passes
const find2ndLargest_TwoPass = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] !== largest) secondLargest = arr[i];
  }

  return secondLargest;
};

console.log("second largest elm(two pass): ", find2ndLargest_TwoPass(arr));
