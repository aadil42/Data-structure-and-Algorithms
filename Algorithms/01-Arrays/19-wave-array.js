function convertToWave(n, arr) {
    //your code here
    const swap = (a,b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    for(let i = 1; i < n; i += 2) {
        swap(i-1, i);
    }

    return arr;
}