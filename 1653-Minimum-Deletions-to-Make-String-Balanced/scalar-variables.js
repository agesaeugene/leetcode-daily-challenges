/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let bCount = 0;
    let dp = 0;

    for (let ch of s) {
        if (ch === 'b') {
            bCount ++;
        } else {
            dp = Math.min(dp + 1, bCount);
        }
    }
    return dp;
};

/*

var minimumDeletions = function(s) {
    let bCount = 0; // number of 'b' seen so far
    let dp = 0;     // minimum deletions needed so far

    for (let ch of s) {
        if (ch === 'b') {
            bCount++;
        } else { // ch === 'a'
            // Either delete this 'a' (dp + 1)
            // Or delete all previous 'b's (bCount)
            dp = Math.min(dp + 1, bCount);
        }
    }

    return dp;
};

*/