


let char:string = ""

function lengthOfLastWord(s: string): number {
    let end:number=s.length
    let start:number=0
    
    for (let index = s.length - 1; 0 <= index; index--) {
        char = s[index]
        if(char !== " "){
            end = index
            for (let i = index; i >= 0; i--) {
                char = s[i]
                if(char === " "){
                    start = i + 1
                    return end - start + 1 
                }
            }
            return end + 1
        }
    }
    return 0
};

console.log(lengthOfLastWord('Hello World'))
