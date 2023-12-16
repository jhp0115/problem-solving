/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let dupCnt = 1;
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            dupCnt += 1;
        } else {
            dupCnt = 1;
        }

        if (dupCnt <= 2) {
            nums[k] = nums[i];
            k += 1;
        }


    }

    return k;

};