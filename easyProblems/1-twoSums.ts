function twoSum(nums: number[], target: number): number[] {
    for (let index = 0; index < nums.length; index++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[index] + nums[j] === target && index !== j){
                console.log("find")
                return [index, j]
            }
        }
    }
    console.log("cant find")
    return [];
};


const nums:number[] = [1,3,4,5];
console.log(twoSum(nums, 8));