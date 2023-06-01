/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let [left, right] = [0, 1];
    
    while(right < nums.length) {
        if(nums[left]) {
            right++;
            left++;
        } else if (!nums[left] && nums[right]) {
            swap(left,right,nums);
            left++;
            right++;
        } else {
            right++;
        }
       
    }
    
    };
    
    function swap(i,j,nums) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }