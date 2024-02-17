/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var shift = function (element) {
        nums.unshift(element);
    };
    const newNums = Array.from(new Set(nums)).reverse();
    newNums.forEach(shift);
    return newNums.length;
};
