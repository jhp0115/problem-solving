/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    /**
    마지막 원소 - 1 에서 다음 로직을 시작.

    특정 원소(cur)에서 goal 원소로 갈 수 있으면 goal을 해당 cur로 변경.
    이를 첫 원소를 만날 때까지 반복.

     */
    if (nums.length === 1) return true;

    let goal = nums.length - 1;
    let cur = goal - 1;

    while (0 <= cur) {
        if (goal - cur <= nums[cur]) {
            goal = cur;
            cur = goal - 1;
        } else {
            cur -= 1;
        }

        if (goal === 0) {
            return true;
        }

    }

    return false;


};