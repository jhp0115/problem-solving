/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /**
    판매할 가격이 확정될 때, profit뿐만 아니라 low도 확정.
    그리고 low를 마지막으로 판매한 가격으로 변경.

    특정 가격이 현재의 low보다 클 때 수익 계산 및 추가.
     */

    let result = 0;
    let low = prices[0];

    for (let i = 1; i < prices.length; i++) {
        
        if (prices[i] > low) {
            result += prices[i] - low;
        }

        low = prices[i];

    }

    return result;


    
};