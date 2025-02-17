const quickSort = arr => {
    if(arr.length < 2 ) return arr
    const pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for(let i = 0; i< arr.length - 1; i++){
        if(arr[i] < pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    
    }
    
    return [...quickSort(left), pivot , ...quickSort(right)]
}

const arr = [-2, -6, 1]
console.log("sorted arr: ", quickSort(arr))