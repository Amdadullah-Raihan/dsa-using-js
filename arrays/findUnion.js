//Brute force
const findUnion = (arr1, arr2) => {
  const unifiedSet = new Set();

  for (const item of arr1) {
    unifiedSet.add(item);
  }

  for (const item of arr2) {
    unifiedSet.add(item);
  }
  const unionArr = [];
  for (const item of unifiedSet) {
    unionArr.push(item);
  }
  return unionArr;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

console.log("union arr: ", findUnion(arr1, arr2));
