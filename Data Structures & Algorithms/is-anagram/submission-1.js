class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        if (s.toLowerCase().split('').sort().join('') != t.toLowerCase().split('').sort().join('')) {
            return false
        }
        return true
    }
}