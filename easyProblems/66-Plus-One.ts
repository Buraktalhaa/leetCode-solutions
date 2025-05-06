function plusOne(digits: number[]): number[] {
    
    let x:string = ""
    let newDigits:number[]=[]
        for (let i = 0; i < digits.length; i++) {
            x += digits[i].toString()
        }
        let y = BigInt(x) + 1n; 
        x = y.toString()
        for (let i = 0; i < x.length; i++) {
            newDigits.push(Number(x[i]))
            
        }
        return newDigits
    };
    
    console.log(plusOne([1,2,3]))