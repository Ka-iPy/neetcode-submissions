class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {};

        for (let num of nums) {
            if (!seen[num]) {
                seen[num] = 1;
            } else {
                seen[num]++;
            }
        }
        let hold = [];

        for (let key of Object.keys(seen)) {
            hold.push({ [key]: seen[key] });
        }

        let result = hold
            .sort((a, b) => {
                const aValue = Object.values(a)[0];
                const bValue = Object.values(b)[0];
                return bValue - aValue; // descending
            })
            .map((a) => (a = Object.keys(a)[0]))
            .filter((a, i) => i < k);
        return result;
    }
}
