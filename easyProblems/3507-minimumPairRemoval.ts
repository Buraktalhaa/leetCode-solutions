function minimumPairRemoval(nums: number[]): number {
    let operations = 0;
    
    
    while(!isDone(nums)){
        let currentValue = 0
        let currentIndex = 0
        let value = Infinity

        for (let index = 0; index < nums.length -1; index++) {
            currentValue = nums[index] + nums[index + 1]
            
            // daha kucukse value degistir 
            if(value > currentValue){
                value = currentValue;
                currentIndex = index
            }
    
            // esitse
            else if(value === currentValue){
                // hicbir sey yapma
            }
        }
        nums[currentIndex] = value
        nums.splice(currentIndex +1 , 1); 
        operations ++;
        console.log(nums)
    }
    
    return operations;
};

function isDone(nums: number[]): boolean{
    for (let index = 0; index < nums.length -1; index++) {
        if(nums[index] > nums[index + 1]){
            return false
        }      
    }
    return true;
}

minimumPairRemoval([1,2,2])



