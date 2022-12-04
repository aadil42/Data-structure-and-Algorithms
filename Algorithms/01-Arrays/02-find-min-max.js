function getMinMax(arr,n){

    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        min = Math.min(arr[i], min);
        max = Math.max(arr[i], max);
    }

   return [min,max];
}

const arr =  [1, 345, 234, 21, 5678];
console.log(getMinMax(arr, arr.length));