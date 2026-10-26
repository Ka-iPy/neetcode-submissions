class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /*
        
         */
        let alphanum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

        let currated = []
        for(let i = 0; i<s.length; i++){
            if(alphanum.indexOf(s[i].toLowerCase())>-1){
                currated.push(s[i].toLowerCase())
            }
        }
        console.log([currated.reverse().join(''), currated.join('')])
        return [...currated].reverse().join('') === currated.join('')
    }

}
