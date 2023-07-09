// Time O(n^2) | Space O(n)
const bubbleSort = (arr) => {

    const swap = (i, j) => {
        [arr[i],arr[j]] = [arr[j], arr[i]]; 
    }

    const dfs = (start) => {
        if(start === arr.length) return;
        for(let i = start; i < arr.length; i++) {
            if(arr[start] > arr[i]) {
                swap(start,i);
            }
        }
        dfs(start+1);
    }
    dfs(0);

    return arr;
}

const arr = [];

for(let i = 0; i < 1000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}

console.log(bubbleSort(arr));

const check = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}

console.log(check(arr));