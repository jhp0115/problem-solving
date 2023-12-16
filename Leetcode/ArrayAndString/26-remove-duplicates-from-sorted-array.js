/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k = nums.length;

    let i = 1;
    while (i < nums.length && nums[i] !== '_') {
        if (nums[i - 1] === nums[i]) {
            moveLeft(i);
            k -= 1;
        } else {
            i += 1;
        }

    }

    return k;

    function moveLeft(removeIdx) {
        for (let i = removeIdx; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1];
        }
        nums[nums.length - 1] = '_';
    }

};