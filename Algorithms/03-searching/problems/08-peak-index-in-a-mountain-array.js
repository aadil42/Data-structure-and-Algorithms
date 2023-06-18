/**
 * Linear Search
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * Time O(n) | Space O(n)
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) return i - 1;
    } 

};