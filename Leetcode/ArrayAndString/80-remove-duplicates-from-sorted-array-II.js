/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    /**
    i: 순회용 포인터.
    k: 목표에 부합하는 배열의 현재 길이, 원소를 새로 추가할 위치.

    이미 추가된 구역의 원소들(k-2,k-1)과 새로운 원소(i)를 비교한다.
    세 값을 비교하여 3연속 같은 값이 아니라면 nums[i]를 nums[k]에 복사한다.
     */
    
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1] || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k += 1;
        }

    }

    return k;

};