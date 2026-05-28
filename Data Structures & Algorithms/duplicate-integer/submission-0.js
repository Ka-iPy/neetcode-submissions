class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let watch = [];
        for(let i = 0; i< nums.length; i++){
            if (watch.indexOf(nums[i]) >= 0){
                return true
            }
            watch.push(nums[i])
        }
        return false
    }
}
