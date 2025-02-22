//Brute force - sort the arr and pick the value of 2nd index(Only works if there are no duplicates)

const secondLargestElement = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  const largestElm = sortedArr[sortedArr.length - 1];
  for (let i = sortedArr.length - 2; i >= 0; i--) {
    if (i !== largestElm) return arr[i];
  }
};

const arr = [6, 3, 1, -6, 10, 7];
console.log("second largest elm: ", secondLargestElement(arr));
