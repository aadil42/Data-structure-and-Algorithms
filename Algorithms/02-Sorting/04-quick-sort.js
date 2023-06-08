
// Time O(n^2) | Space O(n^2)
const quickSort = (arr) => {
    
    const recursion = (arr) => {

        if(arr.length <= 1) return arr;

        const pivot = arr.pop();

        const leftPartition = [];
        const rightPartition = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < pivot) leftPartition.push(arr[i]);
            if(arr[i] > pivot) rightPartition.push(arr[i]);
        }
        console.log(leftPartition, rightPartition);
        return [...recursion(leftPartition), pivot, ...recursion(rightPartition)];
    }

    return recursion(arr);
}

const arr = [6, 3, 9, 5, 2, 8];
console.log(quickSort(arr));