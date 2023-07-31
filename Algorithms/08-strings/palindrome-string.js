/**
 * Two Pointer
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * Time O(n) | Space O(1)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;
    s = s.replace(nonAlphanumericRegex, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};

const s = `" "`;
console.log(isPalindrome(s));