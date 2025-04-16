
let numbersMinimumOperationsToMakeArray: number[] = [];
let totalOperationsMinimumOperationsToMakeArray: number = 0
function minOperations(nums: number[], k: number): number {
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] > k){
            if(numbersMinimumOperationsToMakeArray.includes(nums[index])){
                
            }
            else{
                totalOperationsMinimumOperationsToMakeArray += 1;
                numbersMinimumOperationsToMakeArray.push(nums[index])
            }
        }     
    }
    if(totalOperationsMinimumOperationsToMakeArray !== 0){
        numbersMinimumOperationsToMakeArray = []
        const totalOperations1 = totalOperationsMinimumOperationsToMakeArray
        totalOperationsMinimumOperationsToMakeArray = 0
        return totalOperations1;
    }
    else{
        return -1;
    }
};

console.log(minOperations([9,7,5,3],1))
console.log(minOperations([2,1,2],2))
console.log(minOperations([5,2,5,4,5],2))