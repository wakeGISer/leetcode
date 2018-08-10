/**
 * Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const arr = s.split('');
    let hashTable = new Map();
    let max = 0;
    let headIdx = 0;
    let ans = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (hashTable.get(element) !== undefined) {
            headIdx = Math.max(hashTable.get(element), headIdx);
        }
        ans = Math.max(ans, index - headIdx)
        hashTable.set(element, index);
    }
    return ans
};

console.log(lengthOfLongestSubstring("abcabcbb"))