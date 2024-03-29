
// countSort. 
// drawback. can't sort negetives. Well, we can if we put some more code into it.
// Time O(n+m) | Space O(n)
const countSort = (arr) => {

    // store count of elements
    // modify that array and add the previous element count
    // traverse from back and add

    const countArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(countArr[arr[i]]) {
            countArr[arr[i]] += 1;
        } else {
            countArr[arr[i]] = 1;
        }
    }

    // now we'll now on which position each element ends in the array
    for(let i = 1; i < countArr.length; i++) {
        countArr[i] = (countArr[i-1] || 0) + (countArr[i] || 0);
    }

    const sorted = new Array(arr.length);
    for(let i = arr.length - 1; i > -1; i--) {
        countArr[arr[i]] = countArr[arr[i]] - 1;
        const position = countArr[arr[i]];
        sorted[position] = arr[i];
    }
    return sorted;
}

const check = (arr) => {
    console.log(arr);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1] > arr[i]) return false;
    }
    return true;
}

const arr = [];
for(let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}
console.log(check(countSort(arr)));



