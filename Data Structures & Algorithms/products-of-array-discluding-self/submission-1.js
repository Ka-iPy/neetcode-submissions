class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            output.push(
                nums
                    .filter((a, index) => index !== i)
                    .reduce((acc, curr) => {
                        return acc * curr;
                    }, 1),
            );
        }
        return output;
    }
}
