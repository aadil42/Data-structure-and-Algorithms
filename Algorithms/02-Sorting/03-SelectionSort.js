// [7, 3, 1, 2, 4, 6];

// Selection Sort.
// Time O(n^2) | Space O(1)
const selectionSort = (arr) => {

    const swap = (i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i = 0; i < arr.length; i++) {
        let currMin = i;
        let currItem  = i + 1;
        while(currItem < arr.length) {
            if(arr[currItem] < arr[currMin]) {
                currMin = currItem;
            }        
            currItem++;
        }
        swap(currMin, i);
    }

    return arr;
}


const arr = [];

for(let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}

console.log(selectionSort(arr));

const check = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}

console.log(check(arr));