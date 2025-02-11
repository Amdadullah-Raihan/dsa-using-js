

const selectionSort = arr => {
    const n = arr.length
    for(let i = 0; i<n; i++){
        let minIdx = i;
        for(let j = i + 1; j<n; j++){
            if(arr[minIdx] > arr[j]) minIdx = j;
        }
        
        if(minIdx !== i){
           [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
        
        }
    }
    console.log("sorted arr: ", arr)
    
}

const arr = [8,1,12,15,3,4,2,9]

selectionSort(arr)