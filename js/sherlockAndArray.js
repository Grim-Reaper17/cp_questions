// Link to the original problem : 

let arr = [5,6,8,11]
let output = 'NO'
let rightSum = eval(arr.join('+'))
let leftSum = 0;
// This question cannot be solved by brute force method as this focuses to shed light on a very simple yet tough to find algorithm. To find the right sum of the array we have to subtract the current element from the array and all the elements to the right have the sum. We can do that by finding the sum of every element of the array and removing the new element from it. To find the left sum we need to keep adding elements to the array but this time we need to exclude the current element. To do so we check if the leftSum == rightSum before adding the new element to the leftSum and continuing the loop.
for(let i=0; i<arr.length; i++){
rightSum -= arr[i]
if(rightSum === leftSum){
    output = 'YES'
    console.log(i)
    break;
}
leftSum += arr[i]
}
console.log(output)