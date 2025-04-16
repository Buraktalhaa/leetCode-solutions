const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let totalnumbersReverseDegree = 0
let valueReverseDegree = 0


function reverseDegree(s: string): number {
    for (let index = 0; index < s.length; index++) {
        const currentValue = 26 - alphabet.indexOf(s[index])
        valueReverseDegree = currentValue * (index + 1)
        console.log(valueReverseDegree)
        totalnumbersReverseDegree += valueReverseDegree
    }
    let totalnumber = totalnumbersReverseDegree
    totalnumbersReverseDegree = 0
    return totalnumber
};



console.log(reverseDegree("zaza"))