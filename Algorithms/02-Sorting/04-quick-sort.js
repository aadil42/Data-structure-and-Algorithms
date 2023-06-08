
// worst case.
// Time O(n^2) | Space O(n^2)

// average case.
// Time O(n*log(n)) | Space O(n*log(n))
const quickSort = (arr) => {
    console.log(arr, 'hehe');
    if(arr.length <= 1) return arr;

    const pivot = arr.pop();

    const leftPartition = [];
    const rightPartition = [];
    const equalPartition = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) leftPartition.push(arr[i]);
        if(arr[i] > pivot) rightPartition.push(arr[i]);
        if(arr[i] === pivot) equalPartition.push(arr[i]);
    }

    return [...quickSort(leftPartition),...equalPartition, pivot, ...quickSort(rightPartition)];
}

const arr = [6, 3, 9, 5, 2, 8, 2, 2];
console.log(quickSort(arr));