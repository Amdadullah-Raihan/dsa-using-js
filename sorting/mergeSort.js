const merge = (leftArr, rightArr) => {
  let tempArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] > rightArr[0]) {
      tempArr.push(rightArr.shift());
    } else {
      tempArr.push(leftArr.shift());
    }
  }
  return [...tempArr, ...leftArr, ...rightArr];
};

const mergeSort = (
  arr,
  start = 0,
  mid = Math.floor(arr.length / 2),
  end = arr.length
) => {
  if (arr.length == 1 || !arr.length) return arr;
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end);

  // console.log(left," " ,right)
  // merge(left, right)
  return merge(mergeSort(left), mergeSort(right));
  // merge()
  // mergeSort(right))
};

const arr = [-6, 0, -2, 1];
// console.log(arr.shift())
// const arr = [9, 4]
console.log("sorted arr: ", mergeSort(arr));
