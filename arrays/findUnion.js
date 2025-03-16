//Brute force
const findUnion_BruteForce = (arr1, arr2) => {
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

// console.log("union arr: ", findUnion_BruteForce(arr1, arr2));

const findUnion_Optimal = (arr1, arr2) => {
  let unionArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (!unionArr.length || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }
      i++;
    } else {
      if (!unionArr.length || unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (!unionArr.length || unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (!unionArr.length || unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
    }
    j++;
  }

  return unionArr;
};

console.log("union arr: ", findUnion_Optimal(arr1, arr2));
