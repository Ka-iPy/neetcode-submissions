class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let handOnHeart = {};
        for (let i = 0; i<strs.length; i++){
            handOnHeart[i] = strs[i]
                                .toLowerCase()
                                .split("")
                                .sort()
                                .join("")
        }

        const lookUp = new Set(Object.values(handOnHeart))
        let result=[]
        for(let looking of lookUp){
            result.push(Object.keys(handOnHeart).filter(key => handOnHeart[key] === looking)
            .map(a => strs[a]))
        }
        return result
    }
}
