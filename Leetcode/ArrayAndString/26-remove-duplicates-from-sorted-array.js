/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    /**
    k는 목표 배열의 원소 개수이자, 겹치지 않는 새로운 수를 추가하기 위한 인덱스 번호이다.

    nums는 이미 정렬되어 있으므로, 
    반복문을 통한 현재 항과 직전 항의 원소값이 다른 경우, 새로운 원소 값을 발견한 것으로 간주하고,
    nums[k]에 그 새로운 값을 복사하여 넣는다.

    k는 i보다 작거나 같으므로 앞으로 탐색할 자료를 해치지 않는다.
     */

    let k = 1;  // index for new non-duplicating number.

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
};