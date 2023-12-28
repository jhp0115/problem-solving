/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /**

    Beat 5%. 192ms.
    풀리긴 했으나, 더 좋은 알고리즘을 생각하기보다
    구현에 더 집중하다보니 조금 느린 풀이를 작성하게 된 것 같다.
    유튜브에서 Neetcode의 O(N)속도, O(1)메모리인 풀이를 봤는데,
    핵심 아이디어는 같았다.
    
    같은 아이디어를 기반으로 알고리즘/코드를 더 담백하게 만들려면
    어떻게 해야 할지 좀 더 고민해봐야 할 것 같다.

    ---

    - 물을 담을 만한 수직 벽을 두 개씩 찾기. 
    그리고 그 사이의 물의 양 계산 반복.

    ---

    왼쪽에서부터 첫 번째 벽을 찾는다.
    그 첫 번째 벽과 높이가 같거나 높은 벽을 찾는다.
    두 벽 사이의 물의 양을 계산한다.

    이번에는 두 번째 벽을 첫 번째 벽으로 여기고 위의 과정을 반복한다.

    만약 두 번째 벽을 찾지 못하면 첫 번째 벽의 인덱스를 한 칸 오른쪽으로 옮긴다.

    첫 번째 벽이 height.length - 2이면 종료.

     */

    let result = 0;

    let left = 0;
    let right = 0;
    let wallMinHeight = 0;

    while (height[left] === 0) {
        left += 1;
    }
    wallMinHeight = height[left];


    while (left <= height.length - 3) {
        while (height[right] < wallMinHeight) {
            right += 1;
            if (right >= height.length) {
                
                wallMinHeight -= 1;
                right = left + 1;

            }
        }
        for (let i = left + 1; i <= right - 1; i++) {
            result += wallMinHeight - height[i];
            
        }
        left = right;
        wallMinHeight = height[right];
        right = left + 1;
    }

    return result;
    
};