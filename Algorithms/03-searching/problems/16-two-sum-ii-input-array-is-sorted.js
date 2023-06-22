/**
 * Two pointers
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    const result = [];
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            result.push(left + 1);
            result.push(right + 1);
            break;
        }
        if(numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return result;
};

/**
 * Brute force
 * 
 * Time O(n^2) | Space O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
     for(let j = i + 1; j < numbers.length; j++) {
         if (numbers[i] + numbers[j] === target) 
 {
     return [i+1, j+1];
 }
     }
    } 
     
     return "can't obtain the sum";
 };