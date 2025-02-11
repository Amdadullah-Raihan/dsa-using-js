
const bubbleSort = arr => {
    let n = arr.length;
   for(let i = 0; i<n;i++){
       for(let j = i+1; j<n; j++){
           if(arr[i]>arr[j]){
               [arr[i], arr[j]] = [arr[j], arr[i]]
           }
       }
   } 
   
   console.log("sorted arr: ", arr)
}

const arr = [8,1,12,15,3,4,2,9];
bubbleSort(arr)
