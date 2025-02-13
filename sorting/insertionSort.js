

const insertionSort = (arr, n = arr.length)=>{
    for(let i = 1; i< n; i++){
       let curr = i;
       
       while(curr - 1 >= 0 &&  arr[curr - 1] > arr[curr] ){
           let temp = arr[curr - 1];
           arr[curr -1 ] = arr[curr]
           arr[curr] = temp
           curr--
       }
    }
    
    return arr;
}

let  arr = [8, 9,1, 5, 2, 3]
console.log("sorted array: ", insertionSort(arr))
arr = [4,0]
console.log("sorted array: ", insertionSort(arr))