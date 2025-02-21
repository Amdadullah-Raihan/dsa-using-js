const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr = [0,0,1, 2, 2, 3, 3, 4, 5, 5, 5];
console.log("without duplicate: ", removeDuplicates(arr));
