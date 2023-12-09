/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dict = {};
    const alreadyConnected = new Set();

    for (let i = 0; i < t.length; i++) {
        if (!dict[s[i]]) {
            if (alreadyConnected.has(t[i])) {
                return false;
            }
            dict[s[i]] = t[i];
            alreadyConnected.add(t[i]);
            
        }

        if (dict[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
};