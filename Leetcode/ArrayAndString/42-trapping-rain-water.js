/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /**

    TIME EXCEEDED: 테스트 케이스 322개 중 320개 통과.
    불통 이유: 철창살처럼, 수많은 벽들이 한 칸 간격으로 많이 있을 때 너무 오래 걸림.

    ---
    각 층을 따로따로 살펴봐보자.

    각 층에서, 가장 왼쪽 벽과 오른쪽 벽을 찾는다.
    그 두 벽 사이의 빈 공간은 모두 물이 들어갈 수 있다.
    (공중에 떠 있는 벽이 없기 때문)
    
    - 블록은 위로 쌓일 때 연속적으로 쌓일 수 있으므로,
    가장 바깥의 두 벽부터 투포인터를 시작한다.

    - 좌우 블록이 없으면 종료.
     */
    

    let result = 0;

    let left = 0;
    let right = height.length - 1;

    
    for (let floor = 1; ; floor++) {
        while (height[left] < floor) {
            left += 1;
        }
        while (height[right] < floor) {
            right -= 1;
        }

        if (left >= right) {
            break;
        }

        for (let i = left; i <= right; i++) {
            if (height[i] < floor) {
                result += 1;
            }
        }

    }


    return result;



};