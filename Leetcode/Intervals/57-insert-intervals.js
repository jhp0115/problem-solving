/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    // 61ms. 69.75%.

    // 나중에 splice 안 쓰고 해보자.

    // [1,3] '[2,5]' [6,9]

    // [1,2] [3,5] '[4,8]' [6,7] [8,10] [12,16]

    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let i = 1;
    while (i < intervals.length) {
        //console.log(intervals, i)
        if (intervals[i - 1][1] >= intervals[i][0]) {
            intervals[i][0] = intervals[i - 1][0];
            intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1]);

            intervals.splice(i - 1, 1);
        } else {
            i += 1;
        }
    }

    return intervals;
};