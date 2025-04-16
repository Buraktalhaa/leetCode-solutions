function isPalindrome(x: number): boolean {

    const stringX = x.toString();
    let newNumber = ""
    for (let index = 1; index < stringX.length + 1; index++) {
        newNumber += stringX.charAt(stringX.length - index)
    }
    if (parseInt(newNumber) === x) {
        console.log("palindrome")
        return true;
    }
    else{
        console.log("not palindrome")
        return false;
    }
};

isPalindrome(121)