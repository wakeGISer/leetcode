 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
 var twoSum = function (nums, target) {
     const len = nums.length;
     let hashTable = new Map();
     for (let i = 0; i < len; i++) {
         const subNum = target - nums[i];
         if (hashTable.get(subNum) !== undefined) {
             return [hashTable.get(subNum), i];
         }
         hashTable.set(nums[i], i);
     }
 };