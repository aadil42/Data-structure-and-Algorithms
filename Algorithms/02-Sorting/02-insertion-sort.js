// Insertion Sort
// Time O(n^2) | Space O(1)

const insertionSort = (arr) => {

    const swap = (i,j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i = 1; i < arr.length; i++) {
        let j = i;
        while(j) {
            if(arr[j] < arr[j-1]) swap(j-1,j);
            j--;
        }
    }

    return arr;
}

const arr = [];

for(let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}

console.log(insertionSort(arr));

const check = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}

console.log(check(arr));

