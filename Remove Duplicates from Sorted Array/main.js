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

nums = [1, 1, 2, 3, 4, 4, 4, 5, 6];
console.log(removeDuplicates(nums));
console.log(nums);
