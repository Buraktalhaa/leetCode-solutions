function maxContainers(n: number, w: number, maxWeight: number): number {
    return Math.min(n*n, Math.floor(maxWeight/w))
};
console.log(maxContainers(2,3,15))




// function maxContainers(n: number, w: number, maxWeight: number): number {
//     const totalCell = n * n;
//     const weight = w;
//     const maxContainer = maxWeight / weight
//     if(totalCell > maxContainer){
//         return maxContainer
//     }
//     else if(totalCell < maxContainer){
//         return totalCell
//     }
//     else{
//         return totalCell
//     }
// };
