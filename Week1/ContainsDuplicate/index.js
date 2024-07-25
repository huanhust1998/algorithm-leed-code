// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function checkContainsDuplicate(nums) {
  const object = {};
  for (let i = 0; i < nums.length; i++) {
    const value = object[nums[i]];
    if (value >= 0) return true;
    object[nums[i]] = i;
  }
  return false;
}
