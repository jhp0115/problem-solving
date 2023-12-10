/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const t = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== t[t.length - 1 - i]) {
            return false;
        }
    }

    return true;
};