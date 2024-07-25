/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

//===================================================================

//Solution - 1
// function twoSum(nums, target) {
//   const nums_gt_target = nums.filter((num) => num <= target && num);
//   const length = nums_gt_target.length;
//   for (let i = 0; i < length; i++) {
//     const value1 = nums_gt_target[i];
//     for (let j = length - 1; j > i; j--) {
//       const value2 = nums_gt_target[j];
//       if (value1 + value2 === target) {
//         const index1 = nums.indexOf(value1);
//         const index2 =
//           value2 === value1 ? nums.indexOf(value2, 1) : nums.indexOf(value2);
//         return [index1, index2];
//       }
//     }
//   }
// }

//===================================================================================

//Solution - 2
function twoSum(nums, target) {
  const length = nums.length;
  const seem = {};
  for (let i = 0; i < length; i++) {
    const diff = target - nums[i];
    if (
      seem[diff.toString()] !== null &&
      seem[diff.toString()] !== undefined
    ) {
      return [seem[diff], i];
    } else {
      seem[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
