let totalnumberRomanToIntegers = 0

function romanToInt(s: string): number {

    for (let index = 0; index < s.length; index++){
        let currentIndex = index;
        let nextIndex = index + 1;

        // 5
        if (s[currentIndex] === "V") {
            totalnumberRomanToIntegers += 5;
        }

        //
        else if(s[currentIndex] === "I"){
            totalnumberRomanToIntegers += 1;
            if(s[nextIndex] === "V"){
                totalnumberRomanToIntegers += 3;
                index ++;
            }
            else if(s[nextIndex] === "X"){
                totalnumberRomanToIntegers += 8
                index ++;
            }
        }

        //
        else if (s[currentIndex] === "X") {
            totalnumberRomanToIntegers += 10;
            if(s[nextIndex] === "L"){
                totalnumberRomanToIntegers += 30
                index++
            }
            else if(s[nextIndex] === "C"){
                totalnumberRomanToIntegers += 80
                index++
            }
        }

        
        // L
        else if (s[currentIndex] === "L") {
            totalnumberRomanToIntegers += 50;
        }

        // C
        else if (s[currentIndex] === "C") {
            totalnumberRomanToIntegers += 100;
            if(s[nextIndex] === "D"){
                totalnumberRomanToIntegers += 300
                index++
            }
            else if(s[nextIndex] === "M"){
                totalnumberRomanToIntegers += 800
                index++
            }
        }

        // D
        else if (s[currentIndex] === "D") {
            totalnumberRomanToIntegers += 500;
        }

        // M
        else if (s[currentIndex] === "M") {
            totalnumberRomanToIntegers += 1000;
        }

    }
    let totalNumberReturn = totalnumberRomanToIntegers;
    totalnumberRomanToIntegers =0
    return totalNumberReturn
};


console.log(romanToInt("LVIII"))
// console.log(romanToInt("XI"))
// console.log(romanToInt("XI"))
// console.log(romanToInt("IX"))