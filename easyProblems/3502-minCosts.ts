function minCosts(cost: number[]): number[] {
    let outputArray: number[] = [];
    let min: number = Infinity;

    for (let index = 0; index < cost.length; index++) {
        if (index === 0) {
            min = cost[0]; 
        } else {
            min = Math.min(min, cost[index]); 
        }

        outputArray[index] = min; 
    }

    return outputArray;
}

console.log(minCosts([5,3,4,1,3,2])); 
