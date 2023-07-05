/**
 * Recursion | DP
 * https://leetcode.com/problems/fibonacci-number/
 * 
 * Time O(n) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    const hash = {};
    const dfs = (n) => {
        if(hash[n]) return hash[n];
        if(n <= 0) {
            return 0;
        }
        if(n === 1) {
            return 1;
        }
        const result =  dfs(n-1) + dfs(n-2);
        hash[n] = result;
        return result;
    }

    return dfs(n);
};

/**
 * Brute force
 * Time O(2^n) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var fib1 = function(n) {
    
    const dfs = (n) => {
        if(n <= 0) {
            return 0;
        }
        if(n === 1) {
            return 1;
        }
        return dfs(n-1) + dfs(n-2);
    }

    return dfs(n);
};