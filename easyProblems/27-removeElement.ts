function removeElement(nums: number[], val: number): number {
    let k:number = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            console.log("if",i)
        }
        else{
            console.log("else",i)
            k ++;
            nums.splice(i ,1)
            i--;
        }
        
    }

    console.log(nums)
    return nums.length;
};
removeElement([0,1,2,2,3,0,4,2],2)
// console.log(removeElement([0,1,2,2,3,0,4,2],3))
// removeElement([3,2,2,3],2)
// console.log(removeElement([3,2,2,3],2))

