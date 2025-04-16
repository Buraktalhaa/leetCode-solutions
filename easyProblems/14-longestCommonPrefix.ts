function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }
    let word: string = ""
    let letter:string = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            letter= strs[0][i] 
            if(strs[j][i] !== letter){
                return word;
            }   
        }
        word += letter

    }
    return word;
};
console.log(longestCommonPrefix(["dog","racecar","car"]))