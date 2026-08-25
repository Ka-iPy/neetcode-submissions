class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0){
            return 0
        }
        let workOn = new Set(nums.sort((a,b) => a - b))
        workOn = [...workOn]
        let longestStreak = 1;
        let streak = 1;
        for(let i=1; i<workOn.length; i++){
            if(workOn[i-1]+1 !== workOn[i]){
                streak = 1
                continue
            } 
            streak+=1
            
            if(streak > longestStreak) {
                longestStreak = streak
            }
        }
        return longestStreak
    }

}
