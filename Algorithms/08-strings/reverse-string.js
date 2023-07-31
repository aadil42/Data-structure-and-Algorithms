/**
 * Two Pointers 
 * https://leetcode.com/problems/reverse-string/
 * Time O(n) | Space o(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    s = [...s];
    let left = 0;
    let right = s.length - 1;
    const swap = (l, r) => {
       [s[l], s[r]] = [s[r], s[l]];
    }
    while(left < right) {
        swap(left, right);
        left++;
        right--;
    }
    return s.join('');
};

const s = 'hello';
console.log(reverseString(s));